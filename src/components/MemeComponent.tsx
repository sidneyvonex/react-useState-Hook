interface MemeTypes {
    title : string;
    image: string;
}


import "./Meme.scss"
export const MemeComponent = ({title, image}:MemeTypes) => {
  
  
    return (
    <div className="memeDiv">
        <img src={image} alt={title} className="memeImg" />
        <h3 className="memeTitle">{title}</h3>

    </div>
  )
}
