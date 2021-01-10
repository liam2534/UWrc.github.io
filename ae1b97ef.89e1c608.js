(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return m}));var o=a(2),n=a(6),r=(a(0),a(141)),c={id:"gromacs-gpu",title:"gromacs on GPUs",author:"Nam Pho",author_title:"Director for Research Computing",author_url:"https://github.com/npho",author_image_url:"https://avatars3.githubusercontent.com/u/1252858?s=400&v=4",tags:["gromacs","molecular dynamics","md","gpu","cuda","cuda11"]},l={permalink:"/blog/2021/01/09/gromacs-gpu",source:"@site/blog/2021-01-09-gromacs-gpu.md",description:"During the January 12, 2021 mox maintenance period long overdue package updates will be applied. The most user impactful upgrade is the GPU driver from to 418.40.04 to 460.27.04 that will allow for CUDA 11 support (up from CUDA 10).",date:"2021-01-09T00:00:00.000Z",tags:[{label:"gromacs",permalink:"/blog/tags/gromacs"},{label:"molecular dynamics",permalink:"/blog/tags/molecular-dynamics"},{label:"md",permalink:"/blog/tags/md"},{label:"gpu",permalink:"/blog/tags/gpu"},{label:"cuda",permalink:"/blog/tags/cuda"},{label:"cuda11",permalink:"/blog/tags/cuda-11"}],title:"gromacs on GPUs",readingTime:5.27,truncated:!1,nextItem:{title:"scRNA-seq",permalink:"/blog/2020/12/14/scrna-seq"}},s=[{value:"Using gromacs",id:"using-gromacs",children:[{value:"gromacs-2020.4 module",id:"gromacs-20204-module",children:[]},{value:"Test simulation of Lysozyme",id:"test-simulation-of-lysozyme",children:[]}]},{value:"(Optional) Compile Notes",id:"optional-compile-notes",children:[{value:"Download Source",id:"download-source",children:[]},{value:"Get a GPU and Code",id:"get-a-gpu-and-code",children:[]},{value:"Pre-requisite Modules",id:"pre-requisite-modules",children:[]},{value:"Compile",id:"compile",children:[]}]}],i={rightToc:s};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"During the January 12, 2021 mox maintenance period long overdue package updates will be applied. The most user impactful upgrade is the GPU driver from to 418.40.04 to 460.27.04 that will allow for CUDA 11 support (up from CUDA 10)."))),Object(r.b)("p",null,"The second most widely used GPU-enabled workflow on HYAK (besides machine learning) is molecular dynamics (MD) so we wanted to test one of the most popular MD codes, gromacs [",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.gromacs.org/About_Gromacs"}),"source"),"], and ensure this driver upgrade wouldn't negatively impact our researchers. I couldn't find gromacs compiled with GPU support currently in our module collection so I used it as an opportunity to create one for you all, read on!"),Object(r.b)("h2",{id:"using-gromacs"},"Using gromacs"),Object(r.b)("p",null,"I'll start with the end result for those of you who just want to use it but following that I'll dive into the nuts and bolts of how we created the module so you can perform additional optimizations."),Object(r.b)("p",null,"This is a GPU-enabled version of gromacs so we need a GPU first (can verify with ",Object(r.b)("inlineCode",{parentName:"p"},"nvidia-smi"),")."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"srun -p build-gpu --time=4:00:00 -n 4 --mem=20G --gpus=1 --pty $0\n")),Object(r.b)("h3",{id:"gromacs-20204-module"},"gromacs-2020.4 module"),Object(r.b)("p",null,"Once we have a GPU we use modules to load gromacs-2020.4 and all its required dependencies (e.g., CUDA11)."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"module load gromacs/2020.4-cuda11.1\n")),Object(r.b)("p",null,"All packages are sub-commands of the ",Object(r.b)("inlineCode",{parentName:"p"},"gmx")," binary so you can verify the module."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell-session",metastring:"terminal=true",terminal:"true"}),"$ gmx -version\n        :-) GROMACS - gmx, 2020.4 (-:\n\nGROMACS version:    2020.4  \nVerified release checksum is 79c2857291b034542c26e90512b92fd4b184a1c9d6fa59c55f2e24ccf14e7281\nPrecision:          single  \nMemory model:       64 bit  \nMPI library:        thread_mpi\nOpenMP support:     enabled (GMX_OPENMP_MAX_THREADS = 64)\nGPU support:        CUDA\nSIMD instructions:  AVX_512 \nFFT library:        fftw-3.3.3-sse2\nRDTSCP usage:       enabled \nTNG support:        enabled \nHwloc support:      hwloc-1.11.8\nTracing support:    disabled\nC compiler:         /sw/gcc/10.1.0/bin/gcc GNU 10.1.0\nC compiler flags:   -mavx512f -mfma -fexcess-precision=fast -funroll-all-loops -O3 -DNDEBUG\nC++ compiler:       /sw/gcc/10.1.0/bin/g++ GNU 10.1.0\nC++ compiler flags: -mavx512f -mfma -fexcess-precision=fast -funroll-all-loops -fopenmp -O3 -DNDEBUG\nCUDA compiler:      /sw/cuda/11.1.1-1/bin/nvcc nvcc: NVIDIA (R) Cuda compiler driver;Copyright (c) 2005-2020 NVIDIA Corporation;Built on Mon_Oct_12_20:09:46_PDT_2020;Cuda compilation tools, release 11.1, V11.1.105;Build cuda_11.1.TC455_06.29190527_0\nCUDA compiler flags:-gencode;arch=compute_35,code=sm_35;-gencode;arch=compute_37,code=sm_37;-gencode;arch=compute_50,code=sm_50;-gencode;arch=compute_52,code=sm_52;-gencode;arch=compute_60,code=sm_60;-gencode;arch=compute_61,code=sm_61;-gencode;arch=compute_70,code=sm_70;-Wno-deprecated-gpu-targets;-gencode;arch=compute_35,code=compute_35;-gencode;arch=compute_50,code=compute_50;-gencode;arch=compute_52,code=compute_52;-gencode;arch=compute_60,code=compute_60;-gencode;arch=compute_61,code=compute_61;-gencode;arch=compute_70,code=compute_70;-gencode;arch=compute_75,code=compute_75;-gencode;arch=compute_80,code=compute_80;-use_fast_math;;-mavx512f -mfma -fexcess-precision=fast -funroll-all-loops -fopenmp -O3 -DNDEBUG\nCUDA driver:        11.20   \nCUDA runtime:       11.10   \n")),Object(r.b)("h3",{id:"test-simulation-of-lysozyme"},"Test simulation of Lysozyme"),Object(r.b)("p",null,"I used a tutorial from the gromacs website ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.gromacs.org/@api/deki/files/198/=gmx-tutorial.pdf"}),"here")," to show it runs processes on GPU(s). The tutorial runs an MD simulation on a lysozyme but that's the extent of my study there. The commands below are a summary of the tutorial with a note that the ",Object(r.b)("inlineCode",{parentName:"p"},"genbox")," subcommand is now replaced by ",Object(r.b)("inlineCode",{parentName:"p"},"solvate"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"gmx pdb2gmx -f 1LYD.pdb -water tip3p\ngmx editconf -f conf.gro -bt dodecahedron -d 0.5 -o box.gro\ngmx solvate -cp box.gro -cs spc216.gro -p topol.top -o solvated.gro\ngmx trjconv -s solvated.gro -f solvated.gro -o solvated.pdb\ngmx grompp -f em.mdp -p topol.top -c solvated.gro -o em.tpr -maxwarn 3\n")),Object(r.b)("p",null,"The final gromacs command below starts the fun, the documentation suggests it will automatically identify the GPUs available to send work to them. However, there are more explicit GPU arguments we encourage you to explore."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"gmx mdrun -v -deffnm em\n")),Object(r.b)("p",null,"You can ",Object(r.b)("inlineCode",{parentName:"p"},"ssh")," into the node you're using in a separate window to have a parallel ",Object(r.b)("inlineCode",{parentName:"p"},"nvidia-smi")," command run so we can monitor the load on the GPU(s)."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell-session",metastring:"terminal=true",terminal:"true"}),"+-------------------------------------------------------------------+\n| Processes:                                                        |\n|  GPU   GI   CI        PID   Type   Process name        GPU Memory |\n|        ID   ID                                         Usage      |\n|===================================================================|\n|    0   N/A  N/A    143353      C   gmx                     165MiB |\n|    1   N/A  N/A    143353      C   gmx                     165MiB |\n|    2   N/A  N/A    143353      C   gmx                     167MiB |\n|    3   N/A  N/A    143353      C   gmx                     167MiB |\n|    4   N/A  N/A    143353      C   gmx                     167MiB |\n|    5   N/A  N/A    143353      C   gmx                     167MiB |\n|    6   N/A  N/A    143353      C   gmx                     167MiB |\n|    7   N/A  N/A    143353      C   gmx                     165MiB |\n+-------------------------------------------------------------------+\n")),Object(r.b)("p",null,"We can see a process occuping each GPU so it works! At least, gromacs uses GPUs...the GPUs themselves weren't stressed heavily and that requires the user to increase the number of rank processes and match that with available GPUs. You can do this by adding arguments to the ",Object(r.b)("inlineCode",{parentName:"p"},"gmx mdrun")," command but by default it did 2 ranks per GPU it detected, which is not a lot."),Object(r.b)("h2",{id:"optional-compile-notes"},"(Optional) Compile Notes"),Object(r.b)("p",null,"You need CUDA11, GNU Compiler, and OpenBLAS library for the version I put together but I was focused on a proof-of-concept and not squeezing out every last drop of performance. There's a lot of further optimization to be done and that's left as an exercise for the reader:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Try the Intel compiler and see if it provides further optimization for non-GPU parts of the workflow."),Object(r.b)("li",{parentName:"ol"},"Try other math libraries (e.g., MKL) and see if it speeds things up."),Object(r.b)("li",{parentName:"ol"},"Add in MPI support if you want to use multiple GPUs across multiple nodes."),Object(r.b)("li",{parentName:"ol"},"Add in modules (e.g., PLUMED)."),Object(r.b)("li",{parentName:"ol"},"Other stuff I can't think of with compile flags [",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://manual.gromacs.org/documentation/2020/install-guide/index.html"}),"here"),"].")),Object(r.b)("h3",{id:"download-source"},"Download Source"),Object(r.b)("p",null,"From the login node I staged a folder in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/tools/modules"}),"modules")," directory."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"cd /sw/gromacs/2020.4-cuda11.1\n")),Object(r.b)("p",null,"Grab regression tests."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"wget http://gerrit.gromacs.org/download/regressiontests-2020.4.tar.gz\n")),Object(r.b)("p",null,"Download gromacs-2020.4 [",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://manual.gromacs.org/documentation/2020.4/download.html"}),"source"),"]."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"wget ftp://ftp.gromacs.org/pub/gromacs/gromacs-2020.4.tar.gz\n")),Object(r.b)("h3",{id:"get-a-gpu-and-code"},"Get a GPU and Code"),Object(r.b)("p",null,"I used the shared ",Object(r.b)("inlineCode",{parentName:"p"},"build-gpu")," node for an interactive session but if you are affiliated with a group that has their own you can use that instead."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"srun -p build-gpu --time=4:00:00 -n 4 --mem=20G --gpus=1 --pty $0\n")),Object(r.b)("p",null,"Once you get a session with GPU (you can run ",Object(r.b)("inlineCode",{parentName:"p"},"nvidia-smi")," to confirm you see one). Extract regression tests."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"tar xvzf regressiontests-2020.4.tar.gz\n")),Object(r.b)("p",null,"Do the same for the gromacs code and enter the directory."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"tar xzvf gromacs-2020.4.tar.gz\ncd gromacs-2020.4\n")),Object(r.b)("h3",{id:"pre-requisite-modules"},"Pre-requisite Modules"),Object(r.b)("p",null,"Modules loaded individually for readability but you could load all modules in one command. Get a refresher on modules ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/tools/modules"}),"here"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"module load cmake/3.11.2\nmodule load gcc/10.1.0\nmodule load cuda/11.1.1-1\nmodule load contrib/openblas/0.2.20\n")),Object(r.b)("h3",{id:"compile"},"Compile"),Object(r.b)("p",null,"I created a subdirectory within the source to compile."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"mkdir cuda11\ncd cuda11\n")),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"cmake")," to create the ",Object(r.b)("inlineCode",{parentName:"p"},"Makefile"),". ",Object(r.b)("strong",{parentName:"p"},"Note"),": if you copy-and-paste the ",Object(r.b)("inlineCode",{parentName:"p"},"cmake")," command below you ",Object(r.b)("em",{parentName:"p"},"will")," have to modify the paths referenced for your environment."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"cmake .. -DGMX_BUILD_OWN_FFTW=OFF -DREGRESSIONTEST_DOWNLOAD=OFF -DGMX_GPU=ON -DGMX_MPI=OFF -DCMAKE_INSTALL_PREFIX=/sw/gromacs/2020.4-cuda11.1 -DREGRESSIONTEST_PATH=/sw/gromacs/2020.4-cuda11.1/regressiontests-2020.4 -DCUDA_TOOLKIT_ROOT_DIR=/sw/cuda/11.1.1-1\n")),Object(r.b)("p",null,"With the ",Object(r.b)("inlineCode",{parentName:"p"},"Makefile")," ready you can run ",Object(r.b)("inlineCode",{parentName:"p"},"make -j 4")," and replace 4 with however many cores you have in your session then ",Object(r.b)("inlineCode",{parentName:"p"},"make install"),". I created the module file separately so you can load it with ",Object(r.b)("inlineCode",{parentName:"p"},"module load gromacs/2020.4-cuda11.1")," and run the single ",Object(r.b)("inlineCode",{parentName:"p"},"gmx")," binary."))}m.isMDXComponent=!0},141:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),m=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=m(a),d=o,b=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return a?n.a.createElement(b,l(l({ref:t},i),{},{components:a})):n.a.createElement(b,l({ref:t},i))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<r;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);