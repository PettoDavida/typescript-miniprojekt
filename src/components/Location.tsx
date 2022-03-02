import '../components/CSS/Location.css';

function Location(prop: any) {
    return (
        <div className="location">
            <h1>{capitalizeFirstLetter(prop.parentToChild)}</h1>
        </div>
    );
}

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export default Location;