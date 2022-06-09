import fs from "fs"
import path from "path"
import process from "process"

export default [
  {
    text: "开始",
    items: [
      {
        text: "简介",
        link: "/guide/introduction",
      },
      {
        text: "快速开始",
        link: "/guide/getting-started",
      },
    ],
  },
  {
    text: "API 参考",
    items: autoGenerate("reference"),
  },
  {
    text:"杂项",
    items:[
      {
        text:"规范",
        link:"/misc/norm"
      },
      {
        text:"专用文件夹",
        link:"/misc/exclusive-directory"
      }
    ]
  }
];

function autoGenerate(dir){
  let list=fs.readdirSync(path.join(process.cwd(),"docs",dir))
  return list
  .filter(name=>name.endsWith(".md"))
  .map(name=>{
    name=name.slice(0,-3)
    return {
      text:name,
      link:`/${dir}/${name}`
    }
  })
}