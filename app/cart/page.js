'use client'

export default function Cart() {

    let items = [ 'Tomatoes', 'Pasta']

    return ( 
    <div className="text-center text-white">
        {
            items.map((item, i) => {
                return <CartItem item={item} key={i}/>
            })
        }
    </div>
    )
}

function CartItem({item}) {
    return (
        <div className="flex border-b-2 m-auto w-2/4 mt-5">
            <p  className="inline-block mr-3">{item}</p>
            <p  className="inline-block mr-3">$40</p>
            <p  className="inline-block mr-3">1개</p>
            <button  onClick={()=> alert('hello')}>Click me</button>
        </div>
    )
}