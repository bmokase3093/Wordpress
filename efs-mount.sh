EC2=ec2-xx-xxx-xxx-xx.aws-region.compute.amazonaws.com
FS_ID=file-system-id.efs.aws-region.amazonaws.com


efs-mount-point=path
sudo yum -y update 
sudo yum -y install nfs-utils


mkdir ~/${efs-mount-point}

sudo mount -t nfs -o nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport $FS_ID:/   ~/${efs-mount-point}

echo "sudo mount -t efs ${FS_ID}:/ /${efs-mount-point}" >> /etc/fstab