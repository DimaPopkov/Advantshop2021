import '../App.css';
export function Finder(){
    return(
        <>
            <div className="main-poisk">
            <div className="main-poisk-lupablock">
                <img src="./img/2.png" width="20px" />
            </div>

            <input type="text" className="font16 Finder-input" placeholder="Поиск по товарам"/>
            <p className="font"></p>
            </div>        
        </>
    );
}