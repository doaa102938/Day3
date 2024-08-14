import './LanguagesWrapper.css'
import Htmlimg from '../../assets/images/icon-html.svg'
import CSSimg from '../../assets/images/icon-css.svg'
import JSimg from '../../assets/images/icon-js.svg'
import Accessimg from '../../assets/images/icon-accessibility.svg'
import LanguageItem from '../LanguageItem/LanguageItem'
function LanguagesWrapper() {
    return (
        <div id="LanguagesWrapper">
            <LanguageItem LanguageName="HTML" LanguageIcon={Htmlimg}></LanguageItem>
            <LanguageItem LanguageName="CSS" LanguageIcon={CSSimg}></LanguageItem>
            <LanguageItem LanguageName="Javascript" LanguageIcon={JSimg}></LanguageItem>
            <LanguageItem LanguageName="Accessibility" LanguageIcon={Accessimg}></LanguageItem>
        </div>
    )
}
export default LanguagesWrapper