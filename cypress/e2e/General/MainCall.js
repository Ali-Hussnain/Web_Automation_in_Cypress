import login from "../testviews/LoginView";
import home from "../testviews/homeview";
import calendar from "../testviews/calendarView";
import Quran from "../testviews/QuranView";
import DemoQA from "../testviews/DemoQAView";

class MainCall {


static login = new login();
static calendar= new calendar();
static h1= new home();
static Quran = new Quran();
static Demo= new DemoQA();

}
export default MainCall