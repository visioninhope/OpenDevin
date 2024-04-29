"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6706],{2681:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var o=s(4848),r=s(8453);const t={sidebar_label:"process",title:"opendevin.sandbox.docker.process"},c=void 0,d={id:"python/opendevin/sandbox/docker/process",title:"opendevin.sandbox.docker.process",description:"DockerProcess Objects",source:"@site/modules/python/opendevin/sandbox/docker/process.md",sourceDirName:"python/opendevin/sandbox/docker",slug:"/python/opendevin/sandbox/docker/process",permalink:"/OpenDevin/modules/python/opendevin/sandbox/docker/process",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"process",title:"opendevin.sandbox.docker.process"},sidebar:"apiSidebar",previous:{title:"run",permalink:"/OpenDevin/modules/python/opendevin/observation/run"},next:{title:"sandbox",permalink:"/OpenDevin/modules/python/opendevin/sandbox/e2b/sandbox"}},i={},l=[{value:"DockerProcess Objects",id:"dockerprocess-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"parse_docker_exec_output",id:"parse_docker_exec_output",level:4},{value:"read_logs",id:"read_logs",level:4}];function a(e){const n={code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"dockerprocess-objects",children:"DockerProcess Objects"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class DockerProcess(Process)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Represents a background command execution"}),"\n",(0,o.jsx)(n.h4,{id:"__init__",children:"__init__"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def __init__(id: int, command: str, result, pid: int)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Initialize a DockerProcess instance."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"id"})," ",(0,o.jsx)(n.em,{children:"int"})," - The identifier of the command."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"command"})," ",(0,o.jsx)(n.em,{children:"str"})," - The command to be executed."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"result"})," - The result of the command execution."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"pid"})," ",(0,o.jsx)(n.em,{children:"int"})," - The process ID (PID) of the command."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"parse_docker_exec_output",children:"parse_docker_exec_output"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def parse_docker_exec_output(logs: bytes) -> Tuple[bytes, bytes]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When you execute a command using ",(0,o.jsx)(n.code,{children:"exec"})," in a docker container, the output produced will be in bytes. this function parses the output of a Docker exec command."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,o.jsxs)(n.p,{children:["Considering you have a docker container named ",(0,o.jsx)(n.code,{children:"my_container"})," up and running\n$ docker exec my_container echo \"Hello OpenDevin!\"\n>> b'\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\x13Hello OpenDevin!'"]}),"\n",(0,o.jsx)(n.p,{children:"Such binary logs will be processed by this function."}),"\n",(0,o.jsx)(n.p,{children:"The function handles message types, padding, and byte order to create a usable result. The primary goal is to convert raw container logs into a more structured format for further analysis or display."}),"\n",(0,o.jsx)(n.p,{children:"The function also returns a tail of bytes to ensure that no information is lost. It is a way to handle edge cases and maintain data integrity."}),"\n",(0,o.jsx)(n.p,{children:">> output_bytes = b'\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\x13Hello OpenDevin!'\n>> parsed_output, remaining_bytes = parse_docker_exec_output(output_bytes)"}),"\n",(0,o.jsx)(n.p,{children:">> print(parsed_output)\nb'Hello OpenDevin!'"}),"\n",(0,o.jsx)(n.p,{children:">> print(remaining_bytes)\nb''"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"logs"})," ",(0,o.jsx)(n.em,{children:"bytes"})," - The raw output logs of the command."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,o.jsx)(n.p,{children:"Tuple[bytes, bytes]: A tuple containing the parsed output and any remaining data."}),"\n",(0,o.jsx)(n.h4,{id:"read_logs",children:"read_logs"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def read_logs() -> str\n"})}),"\n",(0,o.jsx)(n.p,{children:"Read and decode the logs of the command."}),"\n",(0,o.jsx)(n.p,{children:"This function continuously reads the standard output of a subprocess and\nprocesses the output using the parse_docker_exec_output function to handle\nbinary log messages. It concatenates and decodes the output bytes into a\nstring, ensuring that no partial messages are lost during reading."}),"\n",(0,o.jsx)(n.p,{children:"Dummy Example:"}),"\n",(0,o.jsx)(n.p,{children:">> cmd = 'echo \"Hello OpenDevin!\"'\n>> result = subprocess.Popen(\ncmd, shell=True, stdout=subprocess.PIPE,\nstderr=subprocess.STDOUT, text=True, cwd='.'\n)\n>> bg_cmd = DockerProcess(id, cmd = cmd, result = result, pid)"}),"\n",(0,o.jsx)(n.p,{children:">> logs = bg_cmd.read_logs()\n>> print(logs)\nHello OpenDevin!"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"str"})," - The decoded logs(string) of the command."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var o=s(6540);const r={},t=o.createContext(r);function c(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);