export const courses = {
  beginner: {
    title: "Beginner Level",
    description: "Start your artistic journey with basic drawings using English alphabets, fruits, and vegetables",
    lessons: {
      alphabets: {
        title: "Drawing with Alphabets",
        description: "Learn to draw using English alphabets (A-Z)",
        videos: Array.from({ length: 26 }, (_, i) => ({
          id: `alpha-${i + 1}`,
          title: `Drawing with ${String.fromCharCode(65 + i)}`,
          videoUrl: `#`,
          thumbnail: `#`,
          completed: false
        }))
      },
      fruits: {
        title: "Fruit Drawings",
        description: "Learn to draw 5 different fruits",
        videos: [
          { id: 'fruit-1', title: 'Apple Drawing', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'fruit-2', title: 'Banana Drawing', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'fruit-3', title: 'Orange Drawing', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'fruit-4', title: 'Grapes Drawing', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'fruit-5', title: 'Mango Drawing', videoUrl: '#', thumbnail: '#', completed: false }
        ]
      },
      vegetables: {
        title: "Vegetable Drawings",
        description: "Learn to draw 5 different vegetables",
        videos: [
          { id: 'veg-1', title: 'Carrot Drawing', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'veg-2', title: 'Tomato Drawing', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'veg-3', title: 'Potato Drawing', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'veg-4', title: 'Onion Drawing', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'veg-5', title: 'Cucumber Drawing', videoUrl: '#', thumbnail: '#', completed: false }
        ]
      }
    }
  },
  intermediate: {
    title: "Intermediate Level",
    description: "Enhance your skills with solar system and cartoon drawings",
    lessons: {
      planets: {
        title: "Solar System Drawings",
        description: "Learn to draw all 8 planets of our solar system",
        videos: [
          { id: 'planet-1', title: 'Mercury Drawing', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'planet-2', title: 'Venus Drawing', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'planet-3', title: 'Earth Drawing', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'planet-4', title: 'Mars Drawing', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'planet-5', title: 'Jupiter Drawing', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'planet-6', title: 'Saturn Drawing', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'planet-7', title: 'Uranus Drawing', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'planet-8', title: 'Neptune Drawing', videoUrl: '#', thumbnail: '#', completed: false }
        ]
      },
      cartoons: {
        title: "Cartoon Drawings",
        description: "Learn to draw 7 popular cartoon characters",
        videos: [
          { id: 'cartoon-1', title: 'Mickey Mouse', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'cartoon-2', title: 'Donald Duck', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'cartoon-3', title: 'Tom & Jerry', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'cartoon-4', title: 'SpongeBob', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'cartoon-5', title: 'Pikachu', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'cartoon-6', title: 'Doraemon', videoUrl: '#', thumbnail: '#', completed: false },
          { id: 'cartoon-7', title: 'Shinchan', videoUrl: '#', thumbnail: '#', completed: false }
        ]
      }
    }
  },
  advanced: {
    title: "Advanced Level",
    description: "Master your skills with action heroes and princess drawings",
    lessons: {
      actionHeroes: {
        title: "Action Hero Drawings",
        description: "Learn to draw 10 popular action heroes",
        videos: Array.from({ length: 10 }, (_, i) => ({
          id: `hero-${i + 1}`,
          title: `Action Hero ${i + 1}`,
          videoUrl: '#',
          thumbnail: '#',
          completed: false
        }))
      },
      princesses: {
        title: "Princess Drawings",
        description: "Learn to draw 10 beautiful princesses",
        videos: Array.from({ length: 10 }, (_, i) => ({
          id: `princess-${i + 1}`,
          title: `Princess ${i + 1}`,
          videoUrl: '#',
          thumbnail: '#',
          completed: false
        }))
      }
    }
  }
}; 