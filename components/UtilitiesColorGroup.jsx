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

const UtilitiesColorGroup = ({colorList}) => {
  if (!colorList || colorList.length === 0) {
    return null;
  }



  return (
    <div className='w-full flex flex-col gap-6'>
      <div className='flex flex-row justify-between'>
        <div className='text-white font-medium '>
          Utilities
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