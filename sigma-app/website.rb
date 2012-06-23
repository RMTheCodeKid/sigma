require 'rubygems'
require 'sinatra'
require 'shotgun'
require 'Haml'

get '/' do
  haml :index
end

