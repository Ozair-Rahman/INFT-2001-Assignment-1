import './SocialComponent.css';

const SocialComponent = () => {
    return (
        <>
        <header className='socialComponentHeader'>Social Links</header>
        {/* Social Media Links */}
        <div className="socialHeader">
            {/* Instagram Link */}
            <a className='socialLink' href='https://www.instagram.com/crave.doughnuts/'><img src="https://img.icons8.com/ios-glyphs/30/null/instagram-new.png" alt="Instagram Link" /></a>
            {/* Facebook Link */}
            <a className='socialLink' href='https://www.facebook.com/cravedoughnuts'><img src="https://img.icons8.com/ios-glyphs/30/null/facebook-new.png" alt="Facebook Link" /></a>
        </div>
        </>
    );
}

export default SocialComponent;