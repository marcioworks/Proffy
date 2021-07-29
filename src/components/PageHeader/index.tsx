import React from 'react'
import { Link } from 'react-router-dom'
import BackIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'
import './styles.css'



interface PageHeaderProps {
  title:string;
  description ? : string;
}

const PageHeader: React.FC<PageHeaderProps> = (props)=>{
  return(
    <header className="page-header">
    <div className="top-bar-container">
      <Link to ="/">
        <img src={BackIcon} alt="voltar"/>
      </Link>
      <img src={logoImg} alt="Proffy"/>
    </div>

    <div className="header-content">
      <strong>
        Marcio 
      </strong>
       
    </div>
  </header>
  )
}
export default PageHeader;