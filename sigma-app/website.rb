require 'rubygems'
require 'sinatra'
require 'shotgun'
require 'Haml'
require 'sass'

get '/' do
  haml :index
end

post '/' do
  "Thanks!"
end

