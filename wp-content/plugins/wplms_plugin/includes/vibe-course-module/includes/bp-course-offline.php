<?php
/**
 * OFFLINE Courses for Course Module
 *
 * @author      VibeThemes
 * @category    Admin
 * @package     Vibe Course Module
 * @version     2.0
 */

 if ( ! defined( 'ABSPATH' ) ) exit;

class BP_Course_Offline{

    public static $instance;
    var $schedule;

    public static function init(){

        if ( is_null( self::$instance ) )
            self::$instance = new BP_Course_Offline();
        return self::$instance;
    }

    private function __construct(){
    	
    	add_filter('wplms_course_progress_display',array($this,'auto_progress'),10,3);
        add_filter('wplms_offline_course_user_start_time',array($this,'auto_progress_check_bulk_actions'),10,5);

    	

    	
    }

    function auto_progress($progress,$course_id,$user_id=null){
    	if(empty($user_id)){
            $user_id = get_current_user_id();
        }
    	$vibe_course_auto_progress = get_post_meta($course_id,'vibe_course_auto_progress',true);
        $user_start_datetime = '';
        global $wpdb,$bp;
		if(vibe_validate($vibe_course_auto_progress)){
            $course_duration = bp_course_get_course_duration($course_id,$user_id);

            $activity = $wpdb->get_var($wpdb->prepare( "
                            SELECT activity.date_recorded FROM {$bp->activity->table_name} AS activity
                            WHERE     activity.component     = 'course'
                            AND     activity.type     = 'subscribe_course'
                            AND     activity.user_id = %d
                            AND     activity.item_id = %d
                            ORDER BY activity.date_recorded DESC LIMIT 0,1
                        " ,$user_id,$course_id));
            if(!empty($activity)){
                $user_start_datetime = strtotime($activity);
            }

            $user_start_datetime = apply_filters('wplms_offline_course_user_start_time',$user_start_datetime,$course_id,$user_id,$progress,$activity);
            $user_start_datetime = intval($user_start_datetime);
			$course_duration_parameter = apply_filters('vibe_course_duration_parameter',86400,$course_id);
            $course_duration_parameter = intval($course_duration_parameter);
			if(bp_course_is_member($course_id,$user_id)){
				$end_time = apply_filters('bp_course_auto_progress_user_start_time',bp_course_get_user_expiry_time($user_id,$course_id));
				
                if(empty($end_time)){
					$end_time = time();
				}
			}else{
				$start_date = get_post_meta($course_id,'vibe_start_date',true);

				if(empty($start_date)){
					$start_date = get_post_field('post_date',$course_id);
					$start_time = strtotime($start_date);
				}else{
					$start_time = strtotime($start_date);
				}
			}

		}else{
			if(is_user_logged_in()){
				$user_id = get_current_user_id();
				if(bp_course_is_member($course_id,$user_id)){ 
					$progress = bp_course_get_user_progress($user_id,$course_id);
					if(!empty($progress))
						return $progress;
                    else
                        return 0;
				}
			}
		}
        if(isset($end_time)){ 
            if($end_time < time()){
                $progress = 100;
            }else{
                $elapsed = (time() - $user_start_datetime )/$course_duration_parameter;

                $total = get_post_meta($course_id,'vibe_duration',true);
                $progress = round(($elapsed/$total),2)*100;
            }
        }else if(isset($start_time)){
			$elapsed = (time() - $start_time)/$course_duration_parameter;
			$total = get_post_meta($course_id,'vibe_duration',true);
			$progress = round(($elapsed/$total),2)*100;
		}
		
		if($progress < 0)
			$progress = 0;
		if($progress > 100)
			$progress = 100;

		return $progress;
    }

    function auto_progress_check_bulk_actions($user_start_datetime,$course_id,$user_id,$progress,$activity){
        if(empty($activity)){
            global $wpdb,$bp;
            $date_recorded = $wpdb->get_var($wpdb->prepare( "
                                    SELECT activity.date_recorded
                                    FROM {$bp->activity->table_name} AS activity 
                                    LEFT JOIN {$bp->activity->table_name_meta} as meta ON activity.id = meta.activity_id
                                    WHERE     activity.component     = 'course'
                                    AND     activity.type     = 'bulk_action'
                                    AND     meta.meta_key   = 'added_students'
                                    AND     meta.meta_value = %d
                                    AND     activity.item_id = %d
                                    ORDER BY date_recorded DESC LIMIT 0,1
                                " ,$user_id,$course_id));
            if(!empty($date_recorded)){
                $user_start_datetime = strtotime($date_recorded);
            }
        }
        return $user_start_datetime;
    }

    function display_progress($progress = 0){
        $progress = intval($progress);
    	?>
    	<div class="course_front_progressbar">
    		<div class="progress">
        		<div class="bar stretchRight" style="width: 0%;" data-percentage="<?php echo $progress; ?>"></div>
        	</div>
        	<span><?php echo $progress.'%'; ?></span>
       	</div>
        <script>
            jQuery(document).ready(function($){
                $('.course_front_progressbar .bar').css('width', $('.course_front_progressbar .bar').attr('data-percentage')+'%');
            });
        </script>
    	<?php
    }
}

BP_Course_Offline::init();