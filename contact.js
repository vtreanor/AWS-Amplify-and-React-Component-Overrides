import { useNavigateAction} from "@aws-amplify/ui-react/internal";
import ContactUs from "../ui-components/ContactUs";

export default function Contact() {

  const twitterClick = useNavigateAction({
    type: "url",
    url: "https://twitter.com",
    target: "_blank",
  });
  const instagramClick = useNavigateAction({
    type: "url",
    url: "https://instagram.com",
    target: "_blank",
  });

  return (      
    <ContactUs 
      width='50%'
      marginTop='50px'
      marginLeft='auto'
      marginRight='auto'
      overrides={{
        Button:{children:"About any time"},            
        TextField29766939:{
          label:'Chocolates',
          placeholder:'Lots and lots'
        },
        "US HELP CENTER":{children:'Irish Help Centre'},
        "SUBMIT A REQUEST":{children:'Send us a note'},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.":
          {children:"We appreciate that you can't be an expert in everything. We on the other are smart asses and are"},        
        SelectField29766935:{
          options:['Bill', 'Fred', 'Sean'],
          placeholder:'Pick a name',
          label: 'Person picker',
        },
        Twitter:{
          // display:'none',
          className:'cursor',
          onClick: twitterClick,
        },
        Vector29766948:{
          // display:'none',
          className:'cursor',
          onClick: twitterClick,
        },
        Instagram:{
          className:'cursor',
          onClick: instagramClick,
        },
        Vector29766944:{          
          className:'cursor',
          onClick: instagramClick,
        }
      }
    }      
    />      
  )
}

