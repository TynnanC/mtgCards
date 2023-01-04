This is a React Native mobile application, built for Android, and uses Expo to be viewed on a phone.

# Why this project and idea?
I enjoy magic, keeps me active with developing and not letting my skills go rusty. The dataset is interesting, and theres many ways to improve and upgrade this type of project.

# Problems I have encountered
1- I have initially used a json file with data instead of using an API to Scryfall, makes it easier to begin with, will implement the API later etc. However, React Native didn't work well with a 1.5Gb file given it isn't a data handling software. I had to use a python script to clean the data, keeping only creature cards that feature "Goblin" in the type_line (creature type), and removing (seemingly) double sided cards to get a smaller, simpler data set.