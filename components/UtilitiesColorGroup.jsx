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

const shadeName = {
  0:"300",
  1:"500",
  2:"700"
}

const transformData = (colorName,colorList) => {
  return {[colorName]:colorList.reduce((acc, { hueType, hueGroup }) => {
    acc[hueType.toLowerCase()] = hueGroup.reduce((groupAcc, { shade, hex }) => { 
      groupAcc[shadeName[shade]] = hex;
      return groupAcc;
    }, {});
    return acc;
  }, {})
  }
};

const UtilitiesColorGroup = ({colorList, isUtilitiesLocked, setIsUtilitiesLocked}) => {
  // console.log(JSON.stringify(colorList))
  const [colorVibe, setColorVibe] = useState("")
  const [formattedTailwindData, setFormattedTailwindData] = useState("")
  const [isLoading,setIsLoading] = useState(true)
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    // console.log(formattedTailwindData)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  useEffect(()=>{
    if (!colorList || colorList.length === 0) {
      setIsLoading(true)
      return;
    }
    setIsLoading(false)



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
    const centralColor = colorList[0].hueGroup[1].hex
    // console.log(centralColor)
    const colorHSL = chroma(centralColor).hsl()
    const colorSaturation = parseInt(colorHSL[1]*100)
    const colorLightness = parseInt(colorHSL[2]*100)
    let JSONColorName = "" 
    for(let colorGrid of colorVibes){
      if(colorSaturation >= colorGrid.saturationRange[0] &&
        colorSaturation < colorGrid.saturationRange[1] &&
        colorLightness >= colorGrid.lightnessRange[0] &&
        colorLightness < colorGrid.lightnessRange[1]){
          setColorVibe(colorGrid.vibe);
          JSONColorName=colorGrid.vibe.replace(/\W+/g, '-').toLowerCase()
          break;
      }
    }

    const transformedData = transformData(JSONColorName+"-utilities",colorList)
    const formattedData = Object.entries(transformedData).map(([colorName, colorList]) => {
      return `${colorName}: {\n${Object.entries(colorList)
        .map(([type, shadeList]) => {
          return `  ${type}: {\n${Object.entries(shadeList)
            .map(([shadeLevel, hexValue]) => `    ${shadeLevel}: '${hexValue}'`)
            .join(',\n')}\n  }`;
        })
        .join(',\n')}\n}`;
    }).join(',\n\n');
    setFormattedTailwindData(formattedData)


  }, [colorList])

  const handleLockUtilities = (newState) => {
    setIsUtilitiesLocked(newState)
  } 

  const [isCopy, setIsCopy] = useState(false)
  const handleCopy = () => {
    setIsCopy(true)
		navigator.clipboard.writeText(formattedTailwindData)
		setTimeout(() => {
			setIsCopy(false)
		}, 1000);
  }

	if(isLoading) return null
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
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            slotProps={{
              backdrop: {
                style: {
                  backgroundColor: 'rgba(255, 255, 255, 0.5)', // Change this to your desired color
                },
              },
            }}
            // sx={{bgcolor:"rgb(255 255 255 / 20%)"}}
          >
            <div className='bg-neutral-950 py-8 px-8 relative flex flex-col text-neutral-300 gap-4'>
              <div className='flex flex-row items-center justify-between'>

                <p className='text-base font-bold'>
                  JSON
                </p>

                <div className='flex flex-row gap-1 items-center'>
                  {isCopy?(
                    <button className='w-12 h-12 p-2 text-neutral-300' onClick={handleCopy}>
                      <CheckRoundedIcon className='w-full h-full '/>
                    </button>
                  ):(
                    <button className='w-11 h-11 p-2 text-neutral-500 hover:text-neutral-300 transition-colors duration ease-in-out' onClick={handleCopy}>
                      <ContentPasteIcon className='w-full h-full '/>
                    </button>
                  )}
                  
                  <button className='w-12 h-12 p-2 -mr-3 flex justify-center items-center text-neutral-500 hover:text-neutral-300 transition-colors ease-in-out' onClick={handleClose}>
                    <CloseIcon className='w-full h-full flex flex-row justify-center items-center'/>
                  </button>
                </div>

              </div>

              <div className='md:min-w-72 md:min-h-48'>
                <pre className='bg-neutral-950 rounded-xl p-4 text-neutral-300 border-2 border-neutral-700 text-sm'>
                  {formattedTailwindData}
                </pre>
              </div>
            </div>
          </Dialog>
          <button className='text-neutral-500 hover:text-neutral-300 transition ease-out' onClick={handleClickOpen}>
            <span>
              Export
            </span>
          </button>
        </div>
      </div>
      <div className=' w-full flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-1'>
      {/* [[["#ffffff","#ffffff","#ffffff"],"caution"],[]] */}
        {
          colorList?.map((hueDict, i)=>
          <UtilitiesColorTab
            hueList={hueDict.hueGroup}
            hueType={hueDict.hueType}
            key={i}
          />
          )
        }
      </div>
    </div>
  )
}

export default UtilitiesColorGroup