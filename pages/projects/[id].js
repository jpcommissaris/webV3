import React from 'react';
import Snake from '../../component/Snake';
import Robin from '../../component/Robin';
import Playlist from '../../component/Playlist';

import NavBar from '../../component/NavBar'
import Footer from '../../component/Footer'

import { useRouter } from 'next/router';


//get the current page using switch
function getPage(page) {
  let curr_page = 0
  switch(page) {
    case "snake":  curr_page = 0; break;
    case "robin":  curr_page = 500; break;
    case "playlist":   curr_page = 1000; break;
    case "links":   curr_page = 1500; break;
  }
  return curr_page
}



function Projects() {
  const router = useRouter();

  React.useEffect( () => {
    //fetch the page id and scroll to that page
    let page = router.query.id
    window.scrollTo(0, getPage(page))
  }); 

  
  return (
    <div>
      <NavBar/>
      <Snake/>
      <br/>
      <Robin/>
      <br/>
      <Playlist/>
      <Footer/>
    </div>
  )
} export default Projects; 