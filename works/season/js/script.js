   //西暦を取得して変数に代入
   const fullYear = new Date().getFullYear();
   console.log(fullYear);
   
   
   if(fullYear >= 2025){
   document.querySelector('#this-year').textContent = '2024 - '+fullYear;
   }else{
   //#this-yearにfullYearを文字で表示させる
   document.querySelector('#this-year').textContent = fullYear;
   }