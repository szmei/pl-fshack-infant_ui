import Info from './Info';
import Navigation from './Navigation';
import UploadButton from './UploadButton';
import Footer from './Footer';

import Client from '@fnndsc/chrisapi';

function Home(): JSX.Element {
	return (
		<div >
			<div className="Home">
				<Navigation />
				<Info />
				<UploadButton />
				<Footer />
			</div>
		</div>
	);
}

export default Home;

/*style={{ backgroundImage: `url(${Background})` }}*/ 