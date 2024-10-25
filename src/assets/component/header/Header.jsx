import profile from '../../images/profile.png'

const Header = () => {
    return (
        <div className='md:flex justify-between w-11/12 border bb mx-auto items-center py-4'>
            <h1 className="text-2xl ">Knowladge Cafe</h1>
            <img className='w-10 h-10' src={profile} alt="" />
        </div>
    );
};

export default Header;