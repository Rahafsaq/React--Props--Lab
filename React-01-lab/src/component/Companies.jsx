import React from 'react';
import Services from './Services';
import Programers from './Programers ';
function Companies(props) {
	return (
		<div className='cont'>
			<h1>{props.name}</h1>
			<p>{props.empNum}</p>
			<p>{props.intYear}</p>
			{/* <p>{props.Services}</p> */}
			{/* <p>{Services.service}</p> */}

			<Services service={props.service} price={props.price} />
			<h2>Employers:</h2>
			<div className='programers'>
				<Programers
					proName={props.proName}
					Languages={props.Languages}
					year={props.year}
					company={props.company}
				/>
				<Programers
					proName={props.proName2}
					Languages={props.Languages2}
					year={props.year2}
					company={props.company2}
				/>
				<Programers
					proName={props.proName3}
					Languages={props.Languages3}
					year={props.year3}
					company={props.company3}
				/>
			</div>
			{/* <Programers
				name='Name: Dima -'
				Languages=' Programming Languages: JS - '
				year={2}
				company='  Company Name: Tuwaiq'
			/>
            <Programers
				name='Name: Amzan -'
				Languages=' Programming Languages: JS - '
				year={3}
				company='  Company Name: Tuwaiq'
			/>
            <Programers
				name='Name: Nawaf -'
				Languages=' Programming Languages: Dart - '
				year={1}
				company='  Company Name: Tuwaiq'
			/>
			<Programers
				proName='Name: Abeer -'
				Languages=' Programming Languages: Java - '
				year={2}
				company='  Company Name: Elm'
			/>
            			<Programers
				proName2='Name: Razan -'
				Languages2=' Programming Languages: JS - '
				year2={2}
				company2='  Company Name: Elm'
			/>
            			<Programers
				proName3='Name: Arwa -'
				Languages3=' Programming Languages: Dart - '
				year3={2}
				company3='  Company Name: Elm'
			/>
			<Programers
				proName='Name: Rahaf -'
				Languages='Programming Languages: Dart - '
				year={5}
				company='  Company Name: Stc '
			/>  
            			<Programers
				proName2='Name: Manar -'
				Languages2='Programming Languages: Js - '
				year2={1}
				company2='  Company Name: Stc '
			/>
            			<Programers
				proName3='Name: Sara -'
				Languages3='Programming Languages: C++ - '
				year3={2}
				company3='  Company Name: Stc '
			/>
            
            
            */}
		</div>
	);
}

export default Companies;
