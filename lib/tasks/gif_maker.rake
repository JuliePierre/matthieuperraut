require 'rmagick'
include Magick
require 'open-uri'

namespace :gif_maker do
  desc "Create GIF from multiple images"

  task :create_first_gif => :environment do
    anim = ImageList.new(open(Rails.root.join('lib', 'tasks', '01.png')), open(Rails.root.join('lib', 'tasks', '02.png')), open(Rails.root.join('lib', 'tasks', '03.png')), open(Rails.root.join('lib', 'tasks', '04.png')), open(Rails.root.join('lib', 'tasks', '05.png')), open(Rails.root.join('lib', 'tasks', '06.png')), open(Rails.root.join('lib', 'tasks', '07.png')), open(Rails.root.join('lib', 'tasks', '08.png')), open(Rails.root.join('lib', 'tasks', '09.png')), open(Rails.root.join('lib', 'tasks', '10.png')))
    anim.each do |image|
      image.delay = 20
      image.resize!(0.25)
    end
    anim.write(Rails.root.join('lib', 'tasks', 'animation.gif'))
    exit
  end
end
