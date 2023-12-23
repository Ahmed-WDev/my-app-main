type Header_pr={
    text:string;
  }
  
  
  function Header(props: Header_pr){
    return(
      <h2>{props.text}</h2>
    )
  }
  export default Header;