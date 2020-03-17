import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

type HeaderDropDownProps = {

  headers: string[],
  headerChange: (i: number) => void
}
const HeaderDropDown = ({ headers, headerChange }: HeaderDropDownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedMainTab, setSelectedMainTab] = useState(0);
  const [dropDownToggle ,setDropDownToggle] = useState(headers[0])

const headerClickHandler = (index:number,value:string)=>{
 setSelectedMainTab(index);
 headerChange(index);
 setDropDownToggle(value)
}

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {dropDownToggle}
          </DropdownToggle>
      <DropdownMenu>
        {
          headers.map((head, i) => {
            return (
              <DropdownItem key={i} onClick={(event) => headerClickHandler(i,head)} style={{cursor: "pointer"}} className={selectedMainTab !== i ? `text-white`: 'bg-light text-primary'} >{head}</DropdownItem>
            )
          })
        }



      </DropdownMenu>
    </Dropdown>
  )
}
export default HeaderDropDown;