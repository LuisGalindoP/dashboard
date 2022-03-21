import Button_A from "./Components/buttons/button_A";


function App() {

  const amount1 = 20000;
  const amount2 = 40000;

  return (
    <div class='bg-slate-50'>
      <Button_A
        amount = {"$25,000"}    
      />
      <Button_A
        amount = {amount2}
      />
      <Button_A
        amount = {amount1}
      />
      
    </div>
  );
}

export default App;
