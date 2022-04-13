import * as React from 'react';
import TitleArticle from './TittleArticle';
import ContentArticle from './ContentArticle';

const Article = () => {
  return <div style={{ margin: '5px  ' }}>
    <TitleArticle text='lorem ipsum dolor sit amet' />
    <ContentArticle>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur exercitationem asperiores aspernatur perferendis molestiae, commodi et aliquid veritatis, voluptatem libero illum maiores consectetur vel iure eius architecto. Dolores impedit laborum, odit at fuga numquam, repudiandae voluptates, praesentium cupiditate delectus voluptatibus illo vel quod corrupti veritatis ea facilis voluptate maiores minus! Ipsum facilis beatae eius! Atque nulla voluptatibus, expedita porro distinctio quod dolore? Ut nemo harum obcaecati consequuntur earum, eligendi accusantium voluptas cumque optio?
        Porro adipisci culpa nam obcaecati aut optio quae rerum eaque, dolorum vero magnam ab ut!</p>
      <p>Debitis molestias excepturi nulla amet eaque officia, nostrum perspiciatis aliquid non minus.</p>
    </ContentArticle>
  </div>
}

export default Article;