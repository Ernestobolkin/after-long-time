import "./style/matrixContainer.scss"
// import { BlockOfGrass, BlockOfSky, ExmpleBlock } from "../blocks/block"
import "../blocks/style/block.style.scss"
import { Block } from '../interface/table'
import { Key } from "react";
import { useState } from "react";

function HomePage() {
  let matrix: any = [];
  // const [matrixV1,setMatrixV1] = useState<Array[]| []>([])

  // TODO move function to a service or somthing
  const generateTable = (x: number, y: number) => {
    for (let i = 0; i <= x; i++) {
      matrix.push([])
      // setMatrixV1([...matrixV1,new Array])
      for (let j = 0; j <= y; j++) {
        matrix[i].push({
          y: i,
          x: j,
          name: ""
        })
        if (i === 13) {
          matrix[i][j].name = "grass"
        }

        if (i >= 14) {
          matrix[i][j].name = "dirt"
        }
      }
    }


    return (<tr>
      {matrix.map((element: any[], index: Key | null | undefined) => {
        return (
          <>
            <tr className={"row"} key={index}>
              {
                element.map((el, jndex) => {
                  return (<>
                    <td onClick={onCLickDumb} className={`block Y.${el.y} X.${el.x} ${el?.name}`} key={jndex}>
                    </td>
                  </>)
                })
              }
            </tr>
          </>
        )
      })}
    </tr>)
  }


  function onCLickDumb(e: any) {
    let className:string = e.target.className.split(" ")
    let yis:number  = +className[1].split(".")[1] 
    let xis:number = +className[2].split(".")[1] 
    matrix[yis][xis].name = ""
    generateTable(17, 25)
    
    
    
    
    

  }


  return (
    <div>
      <table id="table" cellSpacing={0}>
        <tbody>
          {generateTable(17, 25)}
        </tbody>
      </table>
    </div>
  )
}

export default HomePage