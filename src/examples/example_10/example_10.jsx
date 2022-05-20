import React from 'react'
import ReactDOM from 'react-dom'
import O_SliderComments from '../../components/organisms/O_SliderComments/O_SliderComments.jsx'
import './example_10.scss'

const slides = [
  {
    title: 'Авокадо',
    content:
      'Завтрак с авокадо - самый вкусный завтрак. Кто не любит этот фрукт, тот просто не ел его правильно! Мое любимое авокадо, которое помогает мне не хандрить.'
  },
  {
    title: 'Киви',
    content:
      'Фрукт этот это просто кладезь витаминов и микроэлементов, содержит в себе и кальций и магний и железо и калий, так же богат витаминами такими как йод, фосфор и цинк, а так же витамины группы В,C, PP, E и A.'
  },
  {
    title: 'Апельсины красные',
    content:
      'Корка красного апельсина тонкая, но плотная. Его не удобно очищать. Проще порезать на дольки и съесть как арбуз Нужно быть готовым, что сок будет литься через край апельсиновых долек - красный апельсин очень сочный.'
  },
  {
    title: 'Кумкват',
    content:
      'Любителям цитрусовых! Крошечный фрукт, прибывший к нам из далекого Китая. Витамина С в два раза больше, чем в мандаринах! А за что его ценят на родине? Он помогает от похмелья, отсюда еще большая ценность этого небольшого, но вкусного фрукта.'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<O_SliderComments slides={slides} />, document.body)
})
