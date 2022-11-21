<?php
/**
 * The template for displaying Course Header
 *
 * Override this template by copying it to yourtheme/course/single/header.php
 *
 * @author 		VibeThemes
 * @package 	vibe-course-module/templates
 * @version     2.0
 */
if ( !defined( 'ABSPATH' ) ) exit;
do_action( 'bp_before_course_header' );

?>
<div class="row">
	<div class="col-md-8 col-sm-12 col-md-push-4">
		<div id="item-header-content">
			<div class="course6_header">
				<div class="course6_course_title">
					
					<?php vibe_breadcrumbs(); ?>
					<h1><?php bp_course_name(); ?></h1>
					
					<div class="course_excerpt">
					<?php the_excerpt(); ?>
					</div>
					<div class="course_meta_details">
						<?php do_action( 'bp_before_course_header_meta' ); ?>
						<div id="item-meta">
							<?php bp_course_meta(); ?>
							<?php
								$enable_instructor = apply_filters('wplms_display_instructor',true,get_the_ID());
								if($enable_instructor){
								?>
								
								<?php
									bp_course_instructor();
									do_action( 'bp_after_course_menu_instructors' );
								?>
								
								<?php
								}
								?>
							<?php do_action( 'bp_course_header_actions' ); ?>
							<?php do_action( 'bp_course_header_meta' ); ?>
						</div>
						
					</div>
				</div>
				<div class="course5-pricing" id="course-pricing">
					<?php bp_course_credits(); ?>
					<?php the_course_button(); ?>
					<?php
					add_filter('wplms_course_details_widget',function($args){unset($args['price']); return $args;})
					?>
				</div>
			</div>
			
		</div><!-- #item-header-content -->
	</div>
	<div class="col-md-4 col-sm-12 col-md-pull-8">
		<div class="course_header5_sideblock">
			<div id="item-header-avatar">
					<?php bp_course_avatar(); ?>
			</div><!-- #item-header-avatar -->
			
			<div class="course-pricing">
				<?php the_course_details(); ?>
			</div>
		</div>
	</div>
</div>
<?php
do_action( 'bp_after_course_header' );
?>