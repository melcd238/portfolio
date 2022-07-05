import "./ScreenTitle.css"



const ScreenTitle = ({title,subtitle})=>{
    return(
        <div className="heading-container">
            <div className="screen-heading">
                <span>{title}</span>
            </div>
            {
                subtitle ? (<div className="screen-sub-heading">
                             <span>{subtitle}</span>
                          </div>) 
                          : 
                          (<div></div>)
            }

            <div className="heading-seperator">
                <div className="seperator-line">
                    <div className="seperator-blob">
                        <div></div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ScreenTitle;