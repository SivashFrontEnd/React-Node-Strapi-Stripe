import "./FeaturedProducts.scss";
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({type}) => {

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  

  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis qui numquam voluptas sit repellendus ipsum id, aliquid doloremque porro, neque quaerat cumque quia aliquam quod quis iure! Adipisci, libero!</p>
      </div>
      <div className="bottom">
        {error ? "Something went wrong" : loading ? "loading" : data.map(item=>(
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts