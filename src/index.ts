export default text => {
  document.oncopy = () => {
    const body = document.body;
    const selection = window.getSelection() ? window.getSelection() : document['selection'].createRange().text;
    if (window['clipboardData']) { 
        const copyText = selection + text;
        window['clipboardData'].setData ('Text', copyText);
        return false;
    } else {
        const copyText = selection + text;
        const newDiv = document.createElement('div');
        newDiv.style.position ='absolute';
        newDiv.style.left ='-99999px';
        body.appendChild(newDiv);
        newDiv.innerHTML = copyText;
        selection.selectAllChildren(newDiv);
        window.setTimeout(() => {
          body.removeChild(newDiv);
        }, 0);
    }
  };
}