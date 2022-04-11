import css from './Assignement.css'
function Title(props){
    return <div>
        <h1 className={props.Myclass}>
            {props.title}
        </h1>
    </div>

}


function Box(props){
    return <div className={props.Myclass}>
        <p>
            {props.Body}
        </p>
    </div>
}

function Show(){
    return <div className='all'>
        <div className="Main">
        <Title Myclass="title" title=" New Saturday, Tuesday, Wednesday"/>
        <div className="me">
            <Box Myclass="box1" Body="web Appication  Devevlopment Using React "/>
            <hr></hr>
            <Box  Myclass="box2" Body=" CA192"/>

        </div>
            </div>
            <div className="Main">
        <Title Myclass="title" title=" New Saturday, Tuesday, Wednesday"/>
        <div className="me">
            <Box Myclass="box1" Body="JAVA "/>
            <hr></hr>
            <Box  Myclass="box2" Body=" CA192"/>

        </div>
            </div>
            <div className="Main">
        <Title Myclass="title" title=" New Saturday, Tuesday, Wednesday"/>
        <div className="me">
            <Box Myclass="box1" Body="COA "/>
            <hr></hr>
            <Box  Myclass="box2" Body=" CA192"/>

        </div>
            </div>
    </div>

    
}
export default Show;





