
function LanguageItem(props) {
    return (
        <button>
            <img src={props.LanguageIcon} />
            <span>{props.LanguageName}</span>
        </button>
    );
}
export default LanguageItem;