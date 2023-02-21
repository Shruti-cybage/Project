import React ,{useState} from 'react';

 const MultiSearch=()=>{
    const[searchTerm,setSearchTerm]=useState("");
    

    const handleSearchTermChange=(event)=>{
        setSearchTerm(event.target.value);
};
     
    const handleSearch=(event)=>{
        event.preventDefault();

       window.open(`https://www.bing.com/search?q=${searchTerm}`,'myFrame');
       window.open(`https://www.google.com/search?igu=1&ei=&q=${searchTerm}`,'myFrame1');
       window.open(`https://duckduckgo.com/${searchTerm}`,'myFrame2');
       window.open(`https://www.ask.com/web?q=${searchTerm}`,'myFrame3');
       window.open(`https://search.yahoo.com/search?q=${searchTerm}`,'myFrame4');
       window.open(`https://boardreader.com/s/${searchTerm}`,'myFrame5')
    };
        
    return(
        <>
        <form onSubmit={handleSearch} >
        <input  type="text" onChange={handleSearchTermChange} value={searchTerm}/>
        <button type="submit">Search</button>
        <div style={{paddingTop:'10px', display:'flex'}}>
        <iframe name='myFrame' src="about:blank" allow=''  border='none'  height='850x' width='585px'  ></iframe>
        <iframe name='myFrame1' src="about:blank" allow='' border='none'  height='850px' width='585px'></iframe>
        <iframe name='myFrame2' src="about:blank" allow='' border='none'  height='850px' width='585px'></iframe>
        <iframe name='myFrame3' src="about:blank" allow='' border='none' float='left' height='850px' width='585px'></iframe>
        <iframe name='myFrame4' src="about:blank" allow='' border='none'  height='850px' width='585px'></iframe>
        <iframe name='myFrame5' src="about:blank" allow=''border='none'  height='600px' width='585px'align='left'></iframe>

        </div>
        </form>
    </>
    )
}
export default MultiSearch;