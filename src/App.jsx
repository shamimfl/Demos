import './App.css';
import Banner from './Component/Banner/Banner';
import Header from './Component/Header/Header';
import PageLayouts from './Component/PageLayouts/PageLayouts';
import ProfessionalBlog from './Component/ProfessionalBlog/ProfessionalBlog';
import ShopPage from './Component/ShopPage/ShopPage';
import Store from './Component/Store/Store';


function App() {
  
  return (
    <div className='app'>
      <Header></Header>
      <Banner></Banner>
      <PageLayouts></PageLayouts>
      <ShopPage></ShopPage>
      <ProfessionalBlog></ProfessionalBlog>
      <Store></Store>
    </div>
  );
}

export default App;
