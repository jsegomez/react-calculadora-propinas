import { Dispatch, SetStateAction } from "react"
import { tipOptions } from "../data/tips"

type TipPercentFormProps = {
  setTip: Dispatch<SetStateAction<number>>
  tip: number
}

export default function TipPercentForm({setTip, tip}: TipPercentFormProps) {  
  return (
    <>
      <h3 className="font-black text-xl">Propina:</h3>

      <form>
        {
          tipOptions.map( option => (
            <div key={option.id} className="flex gap-2">
              <label htmlFor={option.id}>{ option.label }</label>
              <input
                id={option.id}
                type="radio"
                name="tip"
                value={option.value}
                onChange={ () => setTip(option.value) }
                checked={option.value == tip}
              />
            </div>
          ))
        }
      </form>
    </>
  )
}
