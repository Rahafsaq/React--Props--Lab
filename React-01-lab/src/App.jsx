import './App.css';
import Companies from './component/Companies';
function App() {
	return (
		<>
			{/* <Programers
				name='Name: Dima -'
				Languages=' Programming Languages: JS - '
				year={2}
				company='  Company Name: Tuwaiq'
			/> */}
			{/* <Programers
				name='Name: Abeer -'
				Languages=' Programming Languages: JS - '
				year={2}
				company='  Company Name: Elm'
			/> */}
			{/* <Programers
				name='Name: Rahaf -'
				Languages='Programming Languages: Dart - '
				year={2}
				company='  Company Name: Stc '
			/> */}
			<Companies
				name='Company Name: Tuwaiq '
				empNum='Number of employee: 1990 '
				intYear='Year of founded: 2012'
				service='Service: BootCamb'
				price='Price: 0 SRA'
				proName='Name: Dima '
				Languages='Programming Languages: JS  '
				year={2}
				company='Company Name: Tuwaiq'
				proName2='Name: Amzan '
				Languages2=' Programming Languages: JS  '
				year2={3}
				company2='Company Name: Tuwaiq'
				proName3='Name: Nawaf '
				Languages3=' Programming Languages: Dart  '
				year3={1}
				company3='Company Name: Tuwaiq'
			/>
			<Companies
				name='Company Name: Stc '
				empNum='Number of employee: 1330 '
				intYear='Year of founded: 1920'
				service='Telecommunication'
				price='200000 SRA'
				proName='Name: Rahaf '
				Languages='Programming Languages: Dart  '
				year={5}
				company='Company Name: Stc '
				proName2='Name: Manar '
				Languages2='Programming Languages: Js  '
				year2={1}
				company2='Company Name: Stc '
				proName3='Name: Sara '
				Languages3='Programming Languages: C++  '
				year3={2}
				company3='Company Name: Stc '
			/>
			<Companies
				name='Company Name: Elm '
				empNum='Number of employee: 1200 '
				intYear='Year of founded: 2000'
				service='Services: Telecommunication'
				price='Price: 200000 SRA'
				proName='Name: Abeer '
				Languages='Programming Languages: Java  '
				year={2}
				company='Company Name: Elm'
				proName2='Name: Razan '
				Languages2=' Programming Languages: JS '
				year2={2}
				company2='Company Name: Elm'
				proName3='Name: Arwa -'
				Languages3='Programming Languages: Dart'
				year3={2}
				company3='Company Name: Elm'
			/>
		</>
	);
}
export default App;
