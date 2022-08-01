import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/MenuList.css'

function MenuList({Tab}) {
    const [buttonType] = useState(['My', 'Feeds', 'Records', 'Settings']);
    const [followPage] = useState(Tab === 'Follows'?true:false);

    const navigate = useNavigate();

    const selectImgSrc = (type) =>{
      let returnSrc = null;

      switch(type){
        case 'My':
          if(Tab === 'My') returnSrc = '/images/icons/HH_icon_my_clicked.png';
          else returnSrc = '/images/icons/HH_icon_my.png';
          break;
        case 'Feeds':
          if(Tab === 'Feeds') returnSrc = '/images/icons/HH_icon_feed_clicked.png';
          else returnSrc = '/images/icons/HH_icon_feed.png';
          break;
        case 'Records':
          returnSrc = '/images/icons/HH_icon_record.png';
          break;
        case 'Settings':
          if(Tab === 'Settings') returnSrc = '/images/icons/HH_icon_setting_clicked.png';
          else returnSrc = '/images/icons/HH_icon_setting.png';
          break;
        default:
          returnSrc = null;
          break;
      }
      return returnSrc;
    }
    const selectColor = (type) =>{
      return type === Tab?'#66B3F9':'#E3F5FE';
    }
    const selectBorder = (type) =>{
      return type === Tab?'3px solid #66B3F9':'';
    }

    // 후에 닉네임 삽입 부분 수정 필요
    const movePage = (type) => {
      if(type === 'My'){
        navigate(`/GHW`);
        return;
      }
      navigate(`/GHW/${type}`);
    }

    const showButtonList = () =>{
      const buttons = [];
      let start_index;
      let end_index;
      
      if(followPage){
        start_index = 0;
        end_index = 1;
      }
      else{
        start_index = 0;
        end_index = 4;
      }

      for(let i = start_index; i < end_index; i++){
        const imgSrc = selectImgSrc(buttonType[i]); 
        const textColor = selectColor(buttonType[i]);
        const textBorder = selectBorder(buttonType[i]);

        buttons.push(
          <button key={i} className="menulist_button_box" style={{borderBottom:textBorder}}
                  onClick={()=>{movePage(buttonType[i])}}>
            <img className='menulist_button_img' src={imgSrc} alt='icon'/>
            <div className='menulist_button' style={{color:textColor}}>
              {buttonType[i]}
            </div>
          </button>
        );
      }

      return buttons;
    }

    return (
      <div className="MenuList">
        {followPage
        ?
        <div className='follow_menu'>{showButtonList()}</div>
        :<div className='not_follow_menu'>{showButtonList()}</div>}
      </div>
    );
  }

  export default MenuList;