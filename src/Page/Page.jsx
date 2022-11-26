import './Page.css';

const Page = ({ items }) => {
    

    return (
        <div>
            {items.results &&
                items.results.map((item) => {
                return (
                    <div key={item.id}>
                        <div className="name">
                         <p>{item.name}</p>
                        </div>
                    <img src={item.background_image} alt={item.slug} />
                    </div>
                );
            })}
        </div>
    )
}

export default Page;