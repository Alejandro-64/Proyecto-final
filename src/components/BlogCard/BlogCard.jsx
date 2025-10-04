import './BlogCard.css';

const BlogCard = ({ blog }) => {
    const {date, title, paragraph, image} = blog;
    
    return (
        <>
            <article className='blogCard'>
                <header className='blogCard__header'>
                    <ul className='blogCard__circles'>
                        <li className='blogCard__circles-item'>
                            <i className="bi bi-circle-fill"></i>
                        </li>
                        <li className='blogCard__circles-item'>
                            <i className="bi bi-circle-fill"></i>
                        </li>
                        <li className='blogCard__circles-item'>
                            <i className="bi bi-circle-fill"></i>
                        </li>
                    </ul>
                    <span className='blogCard__date'>{date}</span>
                </header>
                <div className='blogCard__image'>
                    <img className='blogCard__image-img' src={image} alt={title} loading='lazy' />
                </div>
                <h3 className='blogCard__title'>{title}</h3>
                <p className='blogCard__paragraph'>{paragraph}</p>
            </article>
        </>
    );
}

export default BlogCard;