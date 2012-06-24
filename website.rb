require 'rubygems'
require 'sinatra'
require 'shotgun'
require 'Haml'
require 'klout'



get '/' do
  haml :index
end

post '/' do
  "Thanks!"
end

