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
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockIcon from '@mui/icons-material/Lock';

const transformData = (colorName, colorList) => {
  const transformedData = {
    [colorName]: colorList.reduce((acc, { shade, hex }) => {
      acc[shade] = hex;
      return acc;
    }, {})
  };

  return transformedData;
};

//to create a vector map to select color
const colors = colorNameList.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});
const nearest = nearestColor.from(colors);



const GreyColorRange = ({colorList, isGreyLocked,setIsGreyLocked}) => {
	if (!colorList || colorList.length === 0) {
		return null;
	}
	const [colorName, setColorName] = useState("")
	const [formattedTailwindData, setFormattedTailwindData] = useState("");
	const [open, setOpen] = useState(false);

	useEffect(()=>{
		if(colorList){
			const nearestColorName = nearest(colorList[4].hex).name
			setColorName(nearestColorName)

			const JSONColorName = nearestColorName.replace(/\W+/g, '-').toLowerCase()

			const transformedData = transformData(JSONColorName, colorList);

			const formattedData = Object.entries(transformedData).map(([colorName, colorList]) => {
				return `${colorName}: {\n${Object.entries(colorList)
					.map(([shade, hex]) => `  ${shade}: '${hex}',`)
					.join('\n')}\n}`;
			}).join('\n\n');
			setFormattedTailwindData(formattedData);
		}
		
	},[colorList])
	// nearestColor need objects {name => hex} as input
	// get closest named color
	
	const handleClickOpen = () => {
		console.log(formattedTailwindData)
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	
	const [isCopy, setIsCopy] = useState(false)
	const handleCopy = () => {
		setIsCopy(true)
				navigator.clipboard.writeText(formattedTailwindData)
				setTimeout(() => {
						setIsCopy(false)
				}, 1000);
	}

	const handleLockGrey = (newState) => {
    setIsGreyLocked(newState)
  } 

	return (
		<div className='w-full flex flex-col gap-6'>
			<div className='flex flex-row justify-between'>
				<div className='text-neutral-300 flex flex-row gap-2'>
					<span className='font-bold text-white flex flex-row gap-2'>
						Grayscale
						{
              isGreyLocked?(
                <button className='p-1 -m-2 w-8 aspect-square text-neutral-300 hover:text-neutral-100' onClick={()=>handleLockGrey(false)}>
                  <LockIcon className='w-full h-full'/>
                </button>
              ):(
                <button className='p-1 -m-2 w-8 aspect-square text-neutral-500 hover:text-neutral-300' onClick={()=>handleLockGrey(true)}>
                  <LockOpenOutlinedIcon className='w-full h-full'/>
                </button>
              )
            }
					</span>
					<span className='font-bold text-white cursor-default'>|</span>
					<span>{colorName} Tint</span>
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
								<pre className='bg-neutral-950 rounded-xl p-4 text-neutral-300 border-2 border-neutral-700'>
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
			<div className=' w-full flex flex-col lg:flex-row justify-center items-center gap-1'>
				{
					colorList?.map((colorval,index)=>(
						<ColorTab
							key={index}
							hex={colorval.hex}
							shade={colorval.shade}
						/>
					))
				}
			</div>
		</div>
	)
}
export default GreyColorRange