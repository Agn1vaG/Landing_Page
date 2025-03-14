import { useState } from 'react';
import { Gamepad, Keyboard, Brain, Dice3, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const TypingGame = () => {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [inputText, setInputText] = useState('');
  const sampleText = "The quick brown fox jumps over the lazy dog";
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  const startGame = () => {
    setStarted(true);
    setCompleted(false);
    setInputText('');
    setStartTime(Date.now());
    setEndTime(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const currentText = e.target.value;
    setInputText(currentText);
    
    if (currentText === sampleText) {
      setEndTime(Date.now());
      setCompleted(true);
    }
  };

  const getWPM = () => {
    if (startTime && endTime) {
      const timeInMinutes = (endTime - startTime) / 60000;
      const wordCount = sampleText.split(' ').length;
      return Math.round(wordCount / timeInMinutes);
    }
    return 0;
  };

  return (
    <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/50 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Keyboard className="text-primary h-5 w-5" />
        <h3 className="text-lg font-semibold">Typing Speed Test</h3>
      </div>
      
      {!started ? (
        <div className="flex flex-col items-center justify-center flex-grow gap-4">
          <p className="text-gray-400 text-center">Test your typing speed with this quick exercise</p>
          <Button onClick={startGame} className="mt-4">Start Typing Test</Button>
        </div>
      ) : (
        <div className="flex flex-col flex-grow">
          <div className="bg-slate-800/50 p-3 rounded mb-4 text-gray-300">
            {sampleText}
          </div>
          <textarea
            value={inputText}
            onChange={handleInputChange}
            disabled={completed}
            className="w-full p-3 bg-slate-800/30 border border-slate-700 rounded text-gray-200 flex-grow focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Start typing here..."
          />
          
          {completed && (
            <div className="mt-4 text-center bg-primary/10 p-3 rounded border border-primary/30">
              <p className="text-primary font-semibold text-lg">Completed!</p>
              <p className="text-gray-300">Your typing speed: <span className="text-primary font-bold">{getWPM()} WPM</span></p>
              <Button onClick={startGame} className="mt-2">Try Again</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const MemoryGame = () => {
  const [started, setStarted] = useState(false);
  const [cards, setCards] = useState<{id: number, emoji: string, flipped: boolean, matched: boolean}[]>([]);
  const [flippedCount, setFlippedCount] = useState(0);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [completed, setCompleted] = useState(false);

  const emojis = ['🎮', '🎲', '🎯', '🏆', '🎪', '🎨'];
  
  const initializeGame = () => {
    const duplicatedEmojis = [...emojis, ...emojis];
    const shuffledEmojis = duplicatedEmojis
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        flipped: false,
        matched: false
      }));
      
    setCards(shuffledEmojis);
    setStarted(true);
    setFlippedCount(0);
    setFlippedIndexes([]);
    setMoves(0);
    setCompleted(false);
  };

  const flipCard = (index: number) => {
    if (cards[index].flipped || cards[index].matched) return;
    
    if (flippedCount === 2) return;
    
    const newCards = [...cards];
    newCards[index].flipped = true;
    
    setCards(newCards);
    setFlippedCount(flippedCount + 1);
    setFlippedIndexes([...flippedIndexes, index]);
    
    if (flippedCount === 1) {
      setMoves(moves + 1);
      
      const firstIndex = flippedIndexes[0];
      if (cards[firstIndex].emoji === cards[index].emoji) {
        setTimeout(() => {
          const matchedCards = [...cards];
          matchedCards[firstIndex].matched = true;
          matchedCards[index].matched = true;
          setCards(matchedCards);
          resetFlippedCards();
          
          if (matchedCards.every(card => card.matched)) {
            setCompleted(true);
          }
        }, 500);
      } else {
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[firstIndex].flipped = false;
          resetCards[index].flipped = false;
          setCards(resetCards);
          resetFlippedCards();
        }, 1000);
      }
    }
  };
  
  const resetFlippedCards = () => {
    setFlippedCount(0);
    setFlippedIndexes([]);
  };

  return (
    <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/50 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="text-primary h-5 w-5" />
        <h3 className="text-lg font-semibold">Memory Match</h3>
      </div>
      
      {!started ? (
        <div className="flex flex-col items-center justify-center flex-grow gap-4">
          <p className="text-gray-400 text-center">Test your memory by matching pairs of cards</p>
          <Button onClick={initializeGame} className="mt-4">Start Memory Game</Button>
        </div>
      ) : (
        <div className="flex flex-col flex-grow">
          <div className="mb-3 flex justify-between">
            <div className="text-gray-400">Moves: <span className="text-primary">{moves}</span></div>
            <Button variant="ghost" size="sm" onClick={initializeGame}>Reset</Button>
          </div>
          
          <div className="grid grid-cols-3 gap-2 flex-grow">
            {cards.map((card, index) => (
              <button
                key={card.id}
                onClick={() => flipCard(index)}
                disabled={card.flipped || card.matched || completed}
                className={`aspect-square flex items-center justify-center text-2xl rounded border ${
                  card.flipped || card.matched
                    ? 'bg-slate-800 border-primary/30'
                    : 'bg-slate-700 border-slate-600 hover:bg-slate-600'
                } transition-colors`}
              >
                {(card.flipped || card.matched) ? card.emoji : ''}
              </button>
            ))}
          </div>
          
          {completed && (
            <div className="mt-4 text-center bg-primary/10 p-3 rounded border border-primary/30">
              <p className="text-primary font-semibold text-lg">Completed!</p>
              <p className="text-gray-300">You won in <span className="text-primary font-bold">{moves} moves</span></p>
              <Button onClick={initializeGame} className="mt-2">Play Again</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const RocketGame = () => {
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState(50);
  const [obstacles, setObstacles] = useState<number[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);

  const startGame = () => {
    setStarted(true);
    setScore(0);
    setPosition(50);
    setObstacles([]);
    setGameOver(false);
    
    const gameLoop = setInterval(() => {
      setScore(prev => prev + 1);
      
      setObstacles(prev => {
        const newObstacles = prev.map(pos => pos - 5);
        const filtered = newObstacles.filter(pos => pos > -10);
        
        if (Math.random() < 0.07) {
          filtered.push(100);
        }
        
        return filtered;
      });
      
      setObstacles(prev => {
        const collision = prev.some(pos => 
          pos < 15 && pos > 5 && (position < 30 || position > 70)
        );
        
        if (collision) {
          clearInterval(gameLoop);
          setGameOver(true);
          setHighScore(prev => Math.max(prev, score));
          return prev;
        }
        
        return prev;
      });
      
    }, 100);
    
    return () => clearInterval(gameLoop);
  };

  const moveRocket = (direction: 'up' | 'down') => {
    if (gameOver) return;
    
    setPosition(prev => {
      if (direction === 'up' && prev > 5) {
        return prev - 10;
      } else if (direction === 'down' && prev < 95) {
        return prev + 10;
      }
      return prev;
    });
  };

  return (
    <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/50 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Rocket className="text-primary h-5 w-5" />
        <h3 className="text-lg font-semibold">Space Rocket</h3>
      </div>
      
      {!started ? (
        <div className="flex flex-col items-center justify-center flex-grow gap-4">
          <p className="text-gray-400 text-center">Navigate your rocket through obstacles</p>
          <Button onClick={startGame} className="mt-4">Start Game</Button>
        </div>
      ) : (
        <div className="flex flex-col flex-grow">
          <div className="bg-slate-800/50 p-3 rounded mb-4 flex justify-between items-center">
            <div className="text-gray-300">Score: <span className="text-primary">{score}</span></div>
            {!gameOver && <div className="text-gray-300">High Score: <span className="text-primary">{highScore}</span></div>}
            {gameOver && <div className="text-red-500 font-bold">Game Over!</div>}
          </div>
          
          <div className="bg-slate-800/30 rounded-lg flex-grow relative border border-slate-700 overflow-hidden">
            <div className="absolute h-full w-full">
              <div 
                className="absolute left-10 w-12 h-8 bg-primary rounded-sm transition-all duration-100"
                style={{ top: `${position}%` }}
              >
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-4 h-2 bg-accent rounded-l-sm"></div>
              </div>
              
              {obstacles.map((pos, index) => (
                <div 
                  key={index}
                  className="absolute top-0 h-full"
                  style={{ left: `${pos}%` }}
                >
                  <div className="relative h-full w-8">
                    <div className="absolute top-0 w-full h-[30%] bg-red-500 rounded-sm"></div>
                    <div className="absolute bottom-0 w-full h-[30%] bg-red-500 rounded-sm"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-4 flex justify-between">
            <Button onClick={() => moveRocket('up')} disabled={gameOver}>Move Up</Button>
            {gameOver && <Button onClick={startGame} variant="default">Play Again</Button>}
            <Button onClick={() => moveRocket('down')} disabled={gameOver}>Move Down</Button>
          </div>
        </div>
      )}
    </div>
  );
};

const GameOfTheDay = () => {
  const [activeTab, setActiveTab] = useState<'typing' | 'memory' | 'rocket'>('typing');
  
  return (
    <div id="games" className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Game of the Day</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take a break and have some fun with these mini-games! Challenge yourself and see how you stack up.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8 space-x-2 overflow-x-auto pb-2">
            <Button 
              onClick={() => setActiveTab('typing')}
              variant={activeTab === 'typing' ? 'default' : 'outline'} 
              className="flex gap-2 items-center"
            >
              <Keyboard className="h-4 w-4" />
              Typing Speed
            </Button>
            <Button 
              onClick={() => setActiveTab('memory')}
              variant={activeTab === 'memory' ? 'default' : 'outline'} 
              className="flex gap-2 items-center"
            >
              <Brain className="h-4 w-4" />
              Memory Match
            </Button>
            <Button 
              onClick={() => setActiveTab('rocket')}
              variant={activeTab === 'rocket' ? 'default' : 'outline'} 
              className="flex gap-2 items-center"
            >
              <Rocket className="h-4 w-4" />
              Space Rocket
            </Button>
          </div>
          
          <div className="h-[450px]">
            {activeTab === 'typing' && <TypingGame />}
            {activeTab === 'memory' && <MemoryGame />}
            {activeTab === 'rocket' && <RocketGame />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOfTheDay;
