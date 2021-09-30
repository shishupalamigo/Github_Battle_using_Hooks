import Card from "./Card";

function AllCard(props) {
  let datas = props.data;
  console.log(datas);
  return (  
      <section className="flex flex-wrap justify-center w-full border-2 m-5 p-5">
          {
              datas.map((data, i) => {
                  return <Card {...data} key={data.id} score = {i + 1} darkMode={props.darkMode}/>
              })
          }
      </section>
      
  )
}
export default AllCard;