import React, {useEffect, useState} from 'react'
import { ColorTab } from './ColorTab'
import nearestColor from 'nearest-color';
import colorNameList from 'color-name-list';
// import Modal from 'react-modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { Backdrop } from '@mui/material';
import UtilitiesColorTab from './UtilitiesColorTab';
import chroma from 'chroma-js';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockIcon from '@mui/icons-material/Lock';

const UtilitiesColorGroup = ({colorList, isUtilitiesLocked, setIsUtilitiesLocked}) => {
  if (!colorList || colorList.length === 0) {
    return null;
  }

  const [colorVibe, setColorVibe] = useState("")

  useEffect(()=>{
    const colorVibes = [
      {
        saturationRange:[0,50],
        lightnessRange:[0,50],
        vibe:"Muted" //Soft Dark - Muted
      },
      {
        saturationRange:[0,50],
        lightnessRange:[50,100],
        vibe:"Pastel" //Soft Bright - Pastel
      },
      {
        saturationRange:[50,100],
        lightnessRange:[0,50],
        vibe:"Deep" //Bold Dark - Deep
      },
      {
        saturationRange:[50,100],
        lightnessRange:[50,100],
        vibe:"Vibrant" //Bold Bright - Vibrant
      }
    ]
    const centralColor = colorList[0][0][1] //[[["#ffffff","#ffffff","#ffffff"],"caution"],[]]
    const colorHSL = chroma(centralColor).hsl()
    const colorSaturation = parseInt(colorHSL[1]*100)
    const colorLightness = parseInt(colorHSL[2]*100)

    for(let colorGrid of colorVibes){
      if(colorSaturation >= colorGrid.saturationRange[0] &&
        colorSaturation < colorGrid.saturationRange[1] &&
        colorLightness >= colorGrid.lightnessRange[0] &&
        colorLightness < colorGrid.lightnessRange[1]){
          setColorVibe(colorGrid.vibe);
          return;
      }
    }

  }, [colorList])

  const handleLockUtilities = (newState) => {
    setIsUtilitiesLocked(newState)
  } 


  return (
    <div className='w-full flex flex-col gap-6'>
      <div className='flex flex-row justify-between'>
        <div className='text-neutral-300 flex flex-row gap-2'>
          <div className='font-bold text-white flex flex-row gap-2'>
            <span className=''>Utilities</span>
            {
              isUtilitiesLocked?(
                <button className='p-1 -m-2 w-8 aspect-square text-neutral-300 hover:text-neutral-100' onClick={()=>handleLockUtilities(false)}>
                  <LockIcon className='w-full h-full'/>
                </button>
              ):(
                <button className='p-1 -m-2 w-8 aspect-square text-neutral-500 hover:text-neutral-300' onClick={()=>handleLockUtilities(true)}>
                  <LockOpenOutlinedIcon className='w-full h-full'/>
                </button>
              )
            }
          </div>
          <span className='font-bold text-white cursor-default'>|</span>
          <span className=''>{colorVibe}</span>
        </div>
        <div>
          <button className='text-neutral-500 hover:text-neutral-300 transition ease-out'>
            <span>
              Export
            </span>
          </button>
        </div>
      </div>
      <div className=' w-full flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-1'>
      {/* [[["#ffffff","#ffffff","#ffffff"],"caution"],[]] */}
        {
          colorList?.map((hueGroup, i)=>
          <UtilitiesColorTab
            hueList={hueGroup[0]}
            hueType={hueGroup[1]}
            key={i}
          />
          )
        }
      </div>
    </div>
  )
}

export default UtilitiesColorGroup