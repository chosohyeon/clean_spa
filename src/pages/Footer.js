import React from 'react'

const Footer = ({ content }) => {
  return (
    <footer className='Footer'>
      <address>
        {content.address}
      </address>
      <ul className='ft_con'>
        <li>사업자등록번호 : {content.number}</li>
        <li>Tel : {content.tel}</li>
        <li>e-mail : {content.email}</li>
      </ul>
      <span>
        &copy; {content.name} All Right Reserved.
      </span>
    </footer>
  )
}

export default Footer