
import { MaterialIcons } from "@expo/vector-icons"

type Category = {
    id: string;
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export const categories: Category[] = [{
    id: '1',
    name: 'Technology',
    icon: 'computer'
}, {
    id: '2',
    name: 'Health',
    icon: 'health-and-safety'
},
{
    id: '3',
    name: 'Finance',
    icon: 'attach-money'
},
{
    id: '4',
    name: 'Education',
    icon: 'school'
},
{
    id: '5',
    name: 'Travel',
    icon: 'airplanemode-active'
},
]