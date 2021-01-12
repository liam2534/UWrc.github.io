(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(2),o=t(6),i=(t(0),t(147)),r={id:"scheduling-jobs",title:"Scheduling Jobs","sidebar-label":"Scheduling Jobs"},l={unversionedId:"compute/scheduling-jobs",id:"compute/scheduling-jobs",isDocsHomePage:!1,title:"Scheduling Jobs",description:"mox uses the Slurm job scheduler.  With ` as your UW NetID, login with ssh @mox.hyak.edu to gain access to the mox` login node.  The login node is used only for login and job submission.  The computational work itself is done on a compute or build node.",source:"@site/docs/compute/scheduling-jobs.md",slug:"/compute/scheduling-jobs",permalink:"/docs/compute/scheduling-jobs",version:"current",sidebar:"someSidebar",previous:{title:"Archive",permalink:"/docs/storage/archive"},next:{title:"Start Here",permalink:"/docs/tools/software"}},s=[{value:"Interactive Nodes",id:"interactive-nodes",children:[{value:"Obtaining Interactive Nodes",id:"obtaining-interactive-nodes",children:[]},{value:"Build Nodes",id:"build-nodes",children:[]},{value:"Specifying Memory Size",id:"specifying-memory-size",children:[]},{value:"Slurm Environment Variables",id:"slurm-environment-variables",children:[]}]},{value:"Batch Jobs",id:"batch-jobs",children:[{value:"Single Node Batch Jobs",id:"single-node-batch-jobs",children:[]},{value:"Multiple Node Batch Jobs",id:"multiple-node-batch-jobs",children:[]},{value:"Self-Limiting Your Number of Running Jobs",id:"self-limiting-your-number-of-running-jobs",children:[]}]},{value:"Common Slurm Error Messages",id:"common-slurm-error-messages",children:[]},{value:"Utility Commands",id:"utility-commands",children:[]},{value:"FOR ADVANCED USERS ONLY: <code>salloc</code>",id:"for-advanced-users-only-salloc",children:[]},{value:"Man Pages",id:"man-pages",children:[]}],c={rightToc:s};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"mox")," uses the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://slurm.schedmd.com/overview.html"}),"Slurm")," job scheduler.  With ",Object(i.b)("inlineCode",{parentName:"p"},"<net_id>")," as your UW NetID, login with ",Object(i.b)("inlineCode",{parentName:"p"},"ssh <net_id>@mox.hyak.edu")," to gain access to the ",Object(i.b)("inlineCode",{parentName:"p"},"mox")," login node.  The login node is used only for login and job submission.  The computational work itself is done on a compute or build node."),Object(i.b)("h2",{id:"interactive-nodes"},"Interactive Nodes"),Object(i.b)("p",null,"There are two types of interactive nodes.  Compute nodes run computations but cannot connect to the internet.  Build nodes are compute nodes that can connect to the Internet to get files and install packages from outside the ",Object(i.b)("inlineCode",{parentName:"p"},"mox")," ecosystem."),Object(i.b)("h3",{id:"obtaining-interactive-nodes"},"Obtaining Interactive Nodes"),Object(i.b)("p",null,"To get an interactive compute node with ",Object(i.b)("inlineCode",{parentName:"p"},"<size>")," GB of memory in your group partition called ",Object(i.b)("inlineCode",{parentName:"p"},"<group_name>")," for ",Object(i.b)("inlineCode",{parentName:"p"},"<time>")," hours, use:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"srun -p <group_name> --time=<time> --mem=<size>G --pty /bin/bash\n")),Object(i.b)("p",null,"Common acceptable time formats include ",Object(i.b)("inlineCode",{parentName:"p"},"hours:minutes:seconds"),", ",Object(i.b)("inlineCode",{parentName:"p"},"days-hours"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"minutes"),"."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session",metastring:"terminal=true",terminal:"true"}),"[linj66@mox2 ~]$ srun -p stf --time=1:00:00 --mem=20G --pty /bin/bash\n[linj66@n2148 ~]$ \n")),Object(i.b)("hr",null),Object(i.b)("p",null,"To get an interactive compute node with ",Object(i.b)("inlineCode",{parentName:"p"},"<num_cores>")," cores, use:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"srun -p <group_name> -A <group_name> --nodes=1 \\\n--ntasks-per-node=<num_cores> --time=<time> \\\n--mem=<size>G --pty /bin/bash\n")),Object(i.b)("hr",null),Object(i.b)("p",null,"To get multiple interactive compute nodes with ",Object(i.b)("inlineCode",{parentName:"p"},"<num_nodes>")," as the number of nodes and ",Object(i.b)("inlineCode",{parentName:"p"},"<cores_per_node>")," as the number of cores, use:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"srun -p <group_name> -A <group_name> --nodes=<num_nodes> \\\n--ntasks-per-node=<cores_per_node> --time=<time> \\\n--mem=<size>G --pty /bin/bash\n")),Object(i.b)("p",null,"When this command runs, you will automatically enter into a session in one of the allocated nodes.  To view the names of all your allocated nodes, use ",Object(i.b)("inlineCode",{parentName:"p"},"scontrol show hostnames"),"."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you are using an interactive node to run a parallel application such as Python multiprocessing, MPI, OpenMP etc. then the number given for the ",Object(i.b)("inlineCode",{parentName:"p"},"--ntasks-per-node")," option must match the number of processes used by your application."))),Object(i.b)("hr",null),Object(i.b)("p",null,"If your group has an interactive node, use the option ",Object(i.b)("inlineCode",{parentName:"p"},"-p <group_name>-int")," like so: "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"srun -p <group_name>-int -A <group_name> --time=<time> --mem=<size>G --pty /bin/bash\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--pty /bin/bash")," ",Object(i.b)("strong",{parentName:"li"},"must")," be the last option given in above command"),Object(i.b)("li",{parentName:"ul"},"If you do not obtain a build node with the specified ",Object(i.b)("inlineCode",{parentName:"li"},"--mem")," value, try smaller memory values")))),Object(i.b)("p",null,"For more details, read the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://slurm.schedmd.com/srun.html"}),Object(i.b)("inlineCode",{parentName:"a"},"srun")," man page"),"."),Object(i.b)("h3",{id:"build-nodes"},"Build Nodes"),Object(i.b)("p",null,"Build nodes are allocated from the ",Object(i.b)("inlineCode",{parentName:"p"},"build")," group partition.  To obtain a build node, execute ",Object(i.b)("inlineCode",{parentName:"p"},"srun")," with the option ",Object(i.b)("inlineCode",{parentName:"p"},"-p build"),"."),Object(i.b)("h3",{id:"specifying-memory-size"},"Specifying Memory Size"),Object(i.b)("p",null,"It is important to use the ",Object(i.b)("inlineCode",{parentName:"p"},"--mem")," option to specify the memory allocation; otherwise the Slurm scheduler limits the memory allocation to a default value which is usually quite low."),Object(i.b)("p",null,"The value given to ",Object(i.b)("inlineCode",{parentName:"p"},"--mem")," should be smaller than the memory of the node as the operating system needs some."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For 64GB nodes, use ",Object(i.b)("inlineCode",{parentName:"li"},"--mem=58G")),Object(i.b)("li",{parentName:"ul"},"For 128GB nodes, use ",Object(i.b)("inlineCode",{parentName:"li"},"--mem=120G")),Object(i.b)("li",{parentName:"ul"},"For 192GB nodes, use ",Object(i.b)("inlineCode",{parentName:"li"},"--mem=185G")),Object(i.b)("li",{parentName:"ul"},"For 256GB nodes, use ",Object(i.b)("inlineCode",{parentName:"li"},"--mem=248G")),Object(i.b)("li",{parentName:"ul"},"For 384GB nodes, use ",Object(i.b)("inlineCode",{parentName:"li"},"--mem=374G")),Object(i.b)("li",{parentName:"ul"},"For 512GB nodes, use ",Object(i.b)("inlineCode",{parentName:"li"},"--mem=500G")),Object(i.b)("li",{parentName:"ul"},"For 768GB nodes, use ",Object(i.b)("inlineCode",{parentName:"li"},"--mem=752G")),Object(i.b)("li",{parentName:"ul"},"For the ",Object(i.b)("inlineCode",{parentName:"li"},"knl")," nodes, use ",Object(i.b)("inlineCode",{parentName:"li"},"--mem=200G"))),Object(i.b)("h3",{id:"slurm-environment-variables"},"Slurm Environment Variables"),Object(i.b)("p",null,"When a job scheduled by Slurm begins, it needs to about how it was scheduled, what its working directory is, who submitted the job, the number of nodes and cores allocated to it, etc.  This information is passed to Slurm via environment variables.  Additionally, these environment variables are also used as default values by programs like ",Object(i.b)("inlineCode",{parentName:"p"},"mpirun"),".  To view a node's Slurm environment variables, use ",Object(i.b)("inlineCode",{parentName:"p"},"export | grep SLURM"),".\nA comprehensive list of the environment variables Slurm sets for each job can be found at the end of the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://slurm.schedmd.com/sbatch.html"}),Object(i.b)("inlineCode",{parentName:"a"},"sbatch")," man page"),"."),Object(i.b)("h2",{id:"batch-jobs"},"Batch Jobs"),Object(i.b)("h3",{id:"single-node-batch-jobs"},"Single Node Batch Jobs"),Object(i.b)("p",null,"Below is a slurm script template.  Submit a batch job from the ",Object(i.b)("inlineCode",{parentName:"p"},"mox")," login node by calling ",Object(i.b)("inlineCode",{parentName:"p"},"sbatch <script_name>.slurm"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:'title="<script_name>.slurm" terminal=true',title:'"<script_name>.slurm"',terminal:"true"}),'!/bin/bash\n\n# JOB NAME\nSBATCH --job-name=<your_job_name>\n\n# ALLOCATION DEFINITION\n# The account and partition options should be the same\n# except in a few cases (e.g. ckpt queue, genpool queue)\nSBATCH --account=<group_name>\nSBATCH --partition=<group_name>\n\n# RESOURCES\nSBATCH --nodes=<num_nodes>  # total number of nodes allocated\nSBATCH --ntasks-per-node=<cores_per_node>  # cores per node\n\n# WALL TIME\n# Do not specify a wall time significantly more than your job needs\n# Common acceptable time formats:\n#    hours:minutes:seconds e.g. 3:00:00 for 3 hours\n#    minutes\n#    days-hours\nSBATCH --time=<time>\n\n# MEMORY PER NODE\n# See above "Specifying Memory Size" for options\nSBATCH --mem=<size>G  # e.g. --mem=100G for 100 GB of memory\n\n# WORKING DIRECTORY ENTRYPOINT\n# Specify the working directory for this job\nSBATCH --chdir=/gscratch/<group_name>/<net_id>/path/to/dir\n\n# Turn on email notifications\nSBATCH --mail-type=ALL\nSBATCH --mail-user=<your_email>\n\n# Export all environment variables to the batch job session\nSBATCH --export=all\n\n# Run the commands to run your program here\n# e.g. load modules, copy input.output files, run program, etc.\n<commands_to_run_your_program>\n\n')),Object(i.b)("h3",{id:"multiple-node-batch-jobs"},"Multiple Node Batch Jobs"),Object(i.b)("p",null,"If your batch job is using multiple nodes, your program should also know how to use all the nodes (e.g. your program is an MPI program)."),Object(i.b)("p",null,"The value given for ",Object(i.b)("inlineCode",{parentName:"p"},"--nodes")," must be less than or equal to the total number of nodes owned by your group."),Object(i.b)("p",null,"The value given for ",Object(i.b)("inlineCode",{parentName:"p"},"--ntasks-per-node")," should be either ",Object(i.b)("inlineCode",{parentName:"p"},"28")," for older ",Object(i.b)("inlineCode",{parentName:"p"},"mox")," nodes or ",Object(i.b)("inlineCode",{parentName:"p"},"40")," for newer nodes.  Do not increase these values.  You can decrease these values if your program is running out of memory on a node."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"SBATCH --nodes=4\n\nSBATCH --ntasks-per-node=28\n# OR\nSBATCH --ntasks-per-node=40\n")),Object(i.b)("h3",{id:"self-limiting-your-number-of-running-jobs"},"Self-Limiting Your Number of Running Jobs"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This feature is not enabled on the ",Object(i.b)("inlineCode",{parentName:"p"},"ckpt")," partition"))),Object(i.b)("p",null,"At times you may wish to self-limit the number of jobs that will be run simultaneously in order to leave nodes in your group's partition for other group members.  "),Object(i.b)("p",null,"To achieve this, you can add ",Object(i.b)("inlineCode",{parentName:"p"},"SBATCH --qos=MaxJobs<n>")," where ",Object(i.b)("inlineCode",{parentName:"p"},"n")," is a number between 1 and 10 to tell the job scheduler to allow only ",Object(i.b)("inlineCode",{parentName:"p"},"n")," jobs running with the option ",Object(i.b)("inlineCode",{parentName:"p"},"--qos=MaxJobs<n>"),".  "),Object(i.b)("p",null,"However, any other jobs without this option set are not limited and jobs with a different value of ",Object(i.b)("inlineCode",{parentName:"p"},"n")," are gated separately."),Object(i.b)("h2",{id:"common-slurm-error-messages"},"Common Slurm Error Messages"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"slurmstepd: error: Exceeded job memory limit")),": your program uses more memory than you allotted during node creation and it has run out of memory.  Get a node with more memory and try again."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"(ReqNodeNotAvail, UnavailableNodes:n[<node numbers list>]")),": your node will not expire (and might be running one of your jobs) before the next scheduled maintenance day.  Either get a node with a shorter ",Object(i.b)("inlineCode",{parentName:"li"},"--time")," duration or wait until after the maintenance has been completed."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"Unable to allocate resources: Invalid account or account/partition combination specified")),": you used ",Object(i.b)("inlineCode",{parentName:"li"},"-p <group_name> -A <group_name>")," and you do not belong to that group.")),Object(i.b)("h2",{id:"utility-commands"},"Utility Commands"),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"<net_id>")," as your UW NetID and ",Object(i.b)("inlineCode",{parentName:"p"},"<group_name>")," as your Hyak group partition name, and ",Object(i.b)("inlineCode",{parentName:"p"},"<job_id>")," as an individual job ID:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/sinfo.html"}),Object(i.b)("inlineCode",{parentName:"a"},"sinfo"))," is used to view information about ",Object(i.b)("inlineCode",{parentName:"li"},"mox")," nodes and partitions.  Use ",Object(i.b)("inlineCode",{parentName:"li"},"sinfo -p <group_name>")," to view information about your group's partition or allocation."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/squeue.html"}),Object(i.b)("inlineCode",{parentName:"a"},"squeue"))," is used to view information about jobs located in the scheduling queue.  Use ",Object(i.b)("inlineCode",{parentName:"li"},"squeue -p <group_name>")," to view information about your group's nodes.  Use ",Object(i.b)("inlineCode",{parentName:"li"},"squeue -u <net_id>")," to view your jobs."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/scancel.html"}),Object(i.b)("inlineCode",{parentName:"a"},"scancel"))," is used to cancel jobs.  Use ",Object(i.b)("inlineCode",{parentName:"li"},"scancel <job_id>")," to cancel a job with the given job ID, or use ",Object(i.b)("inlineCode",{parentName:"li"},"scancel -u <net_id>")," to cancel all of your jobs."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/sstat.html"}),Object(i.b)("inlineCode",{parentName:"a"},"sstat"))," displays status information of a running job pertaining to CPU, Task, Node, Resident Set Size (RSS), and Virtual Memory (VM) statistics.  Read the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/sstat.html"}),"man page")," for a comprehensive list of format options.  "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/sacct.html"}),Object(i.b)("inlineCode",{parentName:"a"},"sacct"))," displays information about completed jobs.  Read the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/sacct.html"}),"man page")," for a comprehensive list of format options."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/sreport.html"}),Object(i.b)("inlineCode",{parentName:"a"},"sreport"))," generates reports about job usage and cluster utilization from Slurm accounting (",Object(i.b)("inlineCode",{parentName:"li"},"sacct"),") data.  For example, to get historical usage the group ",Object(i.b)("inlineCode",{parentName:"li"},"<group_name>")," in March 2020, use ",Object(i.b)("inlineCode",{parentName:"li"},"sreport cluster UserUtilizationByAccount Start=2020-03-01 End=2020-03-31 Accounts=<group_name>"),".")),Object(i.b)("h2",{id:"for-advanced-users-only-salloc"},"FOR ADVANCED USERS ONLY: ",Object(i.b)("inlineCode",{parentName:"h2"},"salloc")),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Do not use ",Object(i.b)("inlineCode",{parentName:"p"},"salloc")," unless you have a specific reason."))),Object(i.b)("p",null,"To get nodes for interactive use:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"salloc -N <num_nodes> -p <group_name> -A <group_name> --time=<time> --mem=<size>G\n")),Object(i.b)("p",null,"When this command runs, you will have been allocated ",Object(i.b)("inlineCode",{parentName:"p"},"num_nodes")," nodes ",Object(i.b)("strong",{parentName:"p"},"but you will still be on the ",Object(i.b)("inlineCode",{parentName:"strong"},"mox")," login node"),"."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"srun <command>")," to run commands on all allocated nodes."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"scontrol show hostnames")," to get the hostnames of your allocated nodes.  Once you have the hostnames, you can ",Object(i.b)("inlineCode",{parentName:"p"},"ssh")," to them using ",Object(i.b)("inlineCode",{parentName:"p"},"ssh <hostname>")," and then use them for your work (e.g. Apache Spark, Hadoop, etc.)"),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session",metastring:"terminal=true",terminal:"true"}),"[linj66@mox2 ~]$ salloc -N 2 -p stf -A stf --time=5 --mem=5G\nsalloc: Pending job allocation 2620960\nsalloc: job 2620960 queued and waiting for resources\nsalloc: job 2620960 has been allocated resources\nsalloc: Granted job allocation 2620960\nsalloc: Waiting for resource configuration\nsalloc: Nodes n[2148-2149] are ready for job\n[linj66@mox2 ~]$ srun echo \"test\"\ntest\ntest\n[linj66@mox2 ~]$ scontrol show hostnames\nn2148\nn2149\n[linj66@mox2 ~]$ ssh n2148\nWarning: Permanently added 'n2148,10.64.56.248' (ECDSA) to the list of known hosts.\n[linj66@n2148 ~]$\n")),Object(i.b)("h2",{id:"man-pages"},"Man Pages"),Object(i.b)("p",null,"All of these man pages can also be viewed on ",Object(i.b)("inlineCode",{parentName:"p"},"mox")," by running ",Object(i.b)("inlineCode",{parentName:"p"},"man <command>"),". "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/sacct.html"}),Object(i.b)("inlineCode",{parentName:"a"},"sacct"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/salloc.html"}),Object(i.b)("inlineCode",{parentName:"a"},"salloc"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/sbatch.html"}),Object(i.b)("inlineCode",{parentName:"a"},"sbatch"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/scancel.html"}),Object(i.b)("inlineCode",{parentName:"a"},"scancel"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/scontrol.html"}),Object(i.b)("inlineCode",{parentName:"a"},"scontrol"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/sinfo.html"}),Object(i.b)("inlineCode",{parentName:"a"},"sinfo"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/squeue.html"}),Object(i.b)("inlineCode",{parentName:"a"},"squeue"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/sreport.html"}),Object(i.b)("inlineCode",{parentName:"a"},"sreport"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/srun.html"}),Object(i.b)("inlineCode",{parentName:"a"},"srun"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://slurm.schedmd.com/sstat.html"}),Object(i.b)("inlineCode",{parentName:"a"},"sstat")))))}b.isMDXComponent=!0},147:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),b=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=b(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=b(t),d=a,u=m["".concat(r,".").concat(d)]||m[d]||p[d]||i;return t?o.a.createElement(u,l(l({ref:n},c),{},{components:t})):o.a.createElement(u,l({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);