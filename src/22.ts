import { createEffect } from 'ecs';
import { IObject } from 'ecs';

interface MyObject extends IObject {
  someProperty: string;
}

let game = new ecs();
game.run(() => {
  let player = game.addGameObject<MyObject>({
    x: -10,
    y: 50
  });

  const listener = () => console.log('Player moved to', { x: player.x, y: player.y });
  player.listen(listener);
});
